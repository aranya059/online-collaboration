class PostDatatable < ApplicationDatatable
  delegate :post_path, to: :@view
  delegate :edit_post_path, to: :@view
  delegate :user_path, to: :@view

  private

  def data
    posts.map do |post|
      [].tap do |column|
        column << @serials[post.id]
        column << sanitize_text(post.code)
        column << if post.Drafted?
                    "<div class='badge badge-secondary'>DRAFTED</div>".html_safe
                  elsif post.Published?
                    "<div class='badge badge-primary'>PUBLISHED</div>".html_safe
                  else
                    "<div class='badge badge-danger'>ARCHIVED</div>".html_safe
                  end
        column << sanitize_text(post.post_title)
        column << link_to(post.creator.full_name.html_safe, user_path(post.creator))
        column << show_datetime(post.created_at.localtime)
        column << show_datetime(post.updated_at.localtime)

        links = []

        links << link_to("<i class='mdi mdi-eye-outline mr-2 text-brand font-23'></i>".html_safe,
                         post_path(post),
                         title: 'Show')
        links << if @current_user.is_admin.eql?(true) || @current_user.id.eql?(post.creator_id)
                   link_to("<i class='mdi mdi-square-edit-outline text-brand mr-2 font-23'></i>".html_safe,
                           edit_post_path(post),
                           title: 'Edit')
                 end
        links << if @current_user.is_admin.eql?(true) || @current_user.id.eql?(post.creator_id)
                   link_to("<i class='mdi mdi-delete mr-2 text-brand font-23'></i>".html_safe,
                           post_path(post),
                           title: 'Delete',
                           method: :delete,
                           data: {confirm: 'Are you sure you want to delete it?'})
                 end
        column << links.join('')
      end
    end
  end

  def count
    Post.count
  end

  def total_entries
    posts.count
  end

  def posts
    @posts ||= fetch_posts
  end

  def fetch_posts
    search_string = []

    columns.each do |term|
      search_string << "#{term} like :search"
    end

    if @current_user.is_admin.eql?(true)
      @posts = Post.all
    elsif @current_user.role.eql?('Admin')
      visible_admin_post_ids = []
      self_post_ids = Post.where(creator_id: @current_user.id).pluck(:id)
      visible_all_post_ids = Post.where(post_visibility_status: 'All', post_status: Post::PUBLISHED).pluck(:id)
      Post.all.where(post_visibility_status: ['Admins' , 'All Employee'], post_status: Post::PUBLISHED).each do |post|
        if User.find_by_id(post.creator_id).company_id.eql?(@current_user.company_id)
          visible_admin_post_ids << post.id
        end
      end
      post_ids = visible_all_post_ids + self_post_ids + visible_admin_post_ids
      @posts = Post.all.where(id: post_ids)
    elsif @current_user.role.eql?('Moderator')
      visible_moderator_post_ids = []
      self_post_ids = Post.where(creator_id: @current_user.id).pluck(:id)
      visible_all_post_ids = Post.where(post_visibility_status: 'All', post_status: Post::PUBLISHED).pluck(:id)
      Post.all.where(post_visibility_status: 'All Employee', post_status: Post::PUBLISHED).each do |post|
        if User.find_by_id(post.creator_id).company_id.eql?(@current_user.company_id)
          visible_moderator_post_ids << post.id
        end
      end
      Post.all.where(post_status: Post::ARCHIVED).each do |post|
        if User.find_by_id(post.creator_id).company_id.eql?(@current_user.company_id)
          visible_moderator_post_ids << post.id
        end
      end
      post_ids = visible_all_post_ids + self_post_ids + visible_moderator_post_ids
      @posts = Post.all.where(id: post_ids)
    else
      visible_employee_post_ids = []
      self_post_ids = Post.where(creator_id: @current_user.id).pluck(:id)
      visible_all_post_ids = Post.where(post_visibility_status: 'All', post_status: Post::PUBLISHED).pluck(:id)
      Post.all.where(post_visibility_status: ['Employees' , 'All Employee'], post_status: Post::PUBLISHED).each do |post|
        if User.find_by_id(post.creator_id).company_id.eql?(@current_user.company_id)
          visible_employee_post_ids << post.id
        end
      end
      post_ids = visible_all_post_ids + self_post_ids + visible_employee_post_ids
      @posts = Post.all.where(id: post_ids)
    end
    @serials = {}

    post_ids = @posts.pluck(:id)
    post_ids&.sort.each_with_index do |id, sl|
      @serials[id] = sl + 1
    end

    posts = @posts.except(:order).joins(:creator).includes([:creator]).order("#{sort_column} #{sort_direction}")
    posts = posts.page(page).per_page(per_page)
    posts.where(search_string.join(' or '), search: "%#{squish_text(params[:search][:value])}%")
  end

  def columns
    %w[posts.id posts.code posts.id posts.post_title users.email posts.created_at posts.updated_at]
  end
end
