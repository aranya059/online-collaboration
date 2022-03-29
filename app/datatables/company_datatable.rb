class CompanyDatatable < ApplicationDatatable
  delegate :company_path, to: :@view
  delegate :edit_company_path, to: :@view

  private

  def data
    companies.map do |company|
      [].tap do |column|
        column << @serials[company.id]
        column << sanitize_text(company.code)
        column << sanitize_text(company.name)

        links = []

        links << link_to("<i class='mdi mdi-eye-outline mr-2 text-brand font-23'></i>".html_safe,
                         company_path(company),
                         title: 'Show')
        if check_permission
          links << link_to("<i class='mdi mdi-square-edit-outline text-brand mr-2 font-23'></i>".html_safe,
                           edit_company_path(company),
                           title: 'Edit')

          links << link_to("<i class='mdi mdi-delete mr-2 text-brand font-23'></i>".html_safe,
                           company_path(company),
                           title: 'Delete',
                           method: :delete,
                           data: {confirm: 'Are you sure you want to delete it?'})
        end

        column << links.join('')
      end
    end
  end

  def count
    Company.count
  end

  def total_entries
    companies.count
  end

  def companies
    @companies ||= fetch_companies
  end

  def fetch_companies
    search_string = []

    columns.each do |term|
      search_string << "#{term} like :search"
    end

    @companies = Company.all
    @serials = {}

    company_ids = @companies.pluck(:id)
    company_ids&.sort.each_with_index do |id, sl|
      @serials[id] = sl + 1
    end

    companies = @companies.except(:order).order("#{sort_column} #{sort_direction}")
    companies = companies.page(page).per_page(per_page)
    companies.where(search_string.join(' or '), search: "%#{squish_text(params[:search][:value])}%")
  end

  def columns
    %w[companies.id companies.code companies.name]
  end
end
