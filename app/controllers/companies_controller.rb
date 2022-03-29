class CompaniesController < ApplicationController
  before_action :set_company, only: %i[ show edit update destroy ]
  before_action :check_permission, only: %i[new create edit update destroy ]

  def index
    respond_to do |format|
      format.html
      format.json { render json: CompanyDatatable.new(view_context, current_user) }
    end
  end

  def show
  end

  def new
    @company = Company.new
    add_breadcrumb 'New Company'
  end

  def edit
  end

  def create
    @company = Company.new(company_params)
    if @company.save
      redirect_to companies_path,
                  notice: 'Company is created successfully'
    else
      render :new
    end
  end

  def update
    if @company.update(company_params)
      redirect_to companies_path,
                  notice: 'Company is updated successfully'
    else
      render :edit
    end
  end

  def destroy
    begin
      if @company.destroy
        redirect_to companies_path,
                    notice: 'Company is destroyed successfully.'
      end
    rescue StandardError => e
      redirect_to fallback_location: root_path,
                  flash: { error: 'Operation could not be completed.' }
    end
  end

  def index_breadcrumb
    add_breadcrumb 'companies', companies_path
  end

  private
    def set_company
      @company = Company.find(params[:id])
    end

    def company_params
      params.require(:company).permit(:name,
                                      :additional_description)
    end

  def check_permission
    begin
      if current_user.is_admin.eql?(true)
        true
      else
        redirect_back fallback_location: root_path,
                      flash: { error: 'You are not eligible to make this change' }
      end
    rescue StandardError => e
      redirect_back fallback_location: root_path,
                    flash: { error: invalid_id_error_message(e) }
    end
  end
end
