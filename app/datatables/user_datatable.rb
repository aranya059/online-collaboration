class UserDatatable < ApplicationDatatable
  delegate :activate_user_user_path, to: :@view
  delegate :role_path, to: :@view
  delegate :user_path, to: :@view

  private

  def data
    users.map.with_index do |user, idx|
      [].tap do |column|
        column << @serials[user.id]
        column << sanitize_text(user.full_name)
        column << sanitize_text(Company.find(user.company_id).name)
        column << sanitize_text(user.email)
        column << if user.active?
                    "<div class='badge badge-success'>Active</div>".html_safe
                  else
                    "<div class='badge badge-secondary'>Inactive</div>".html_safe
                  end

        links = []

        links << link_to("<i class='mdi mdi-square-edit-outline mr-2 font-23'></i>".html_safe, activate_user_user_path(user), title: 'Edit')

        links << link_to("<i class='mdi mdi-delete mr-2 font-23'></i>".html_safe, user_path(user),
                           title: 'Delete',
                           method: :delete,
                           data: {confirm: 'Are you sure you want to delete it?'})

        column << links.join('')
      end
    end
  end

  def count
    User.count
  end

  def total_entries
    users.count
  end

  def users
    @users ||= fetch_users
  end

  def fetch_users
    search_string = []
    columns.each do |term|
      search_string << "#{term} like :search"
    end

    @users = case params[:filter]
             when 'Inactive'
               User.where(active: 0)
             when 'Active'
               User.where(active: 1)
             else
               User.all
             end
    # @users -= Array(current_user)
    @serials = {}
    user_ids = @users.pluck(:id)
    user_ids&.sort.each_with_index do |id, sl|
      @serials[id] = sl + 1
    end
    users = @users.joins(:company).order("#{sort_column} #{sort_direction}")
    users = users.page(page).per_page(per_page)
    users = users.where(search_string.join(' or '), search: "%#{squish_text(params[:search][:value])}%")
    users
  end

  def columns
    %w[users.id name companies.name email active]
  end
end
