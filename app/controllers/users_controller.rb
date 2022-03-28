class UsersController < ApplicationController
  before_action :set_user, only: %i[activate_user update_activate_user destroy]
  before_action :check_permission, only: %i[index update_activate_user destroy activate_user]

  def index
    respond_to do |format|
      format.html
      format.json { render json: UserDatatable.new(view_context, current_user) }
    end
  end

  def activate_user
  end

  def show
    @user = User.find(params[:id])
  end

  def update_activate_user
    @user.active = params[:user][:active]
    @user.role = params[:user][:role]
    begin
      if @user.save
        if @user.active
          notice = "User successfully Activated"
        else
          notice = "User successfully Deactivated"
        end

        redirect_to users_path,
                    notice: notice
      end
    rescue StandardError => e
      redirect_back fallback_location: root_path,
                    flash: { error: "Operation could not be completed" }
    end
  end


  def destroy
    begin
      if @user.destroy
        redirect_to users_path,
                    notice: "User successfully deleted"
      end
    rescue StandardError => e
      redirect_back fallback_location: root_path,
                    flash: { error: "Operation could not be completed" }
    end
  end

  private

  def set_user
    begin
      @user = User.find(params[:id])
    rescue StandardError => e
      redirect_back fallback_location: root_path,
                    flash: { error: invalid_id_error_message(e) }
    end
  end

  def check_permission
    if !current_user.is_admin?
      redirect_back fallback_location: root_path,
                    flash: { error: 'You are not eligible for this operation' }
    end
  end

end
