class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :authenticate_user!
  before_action :configure_permitted_parameters, if: :devise_controller?
  helper_method :is_admin?

  # rescue_from ActiveRecord::RecordNotFound, with: :invalid_entry

  def invalid_id_error_message(e)
    "Invalid entry! #{e}"
  end

  def is_admin? (user)
    user_role = User.find(user.id).role
    if user_role.eql? "ADMIN"
      true
    else
      false
    end
  end

  protected
  def configure_permitted_parameters
    devise_parameter_sanitizer
      .permit(:sign_up) do |u|
      u.permit(
        :first_name,
        :last_name,
        :email,
        :image,
        :signature,
        :phone_number,
        :password_confirmation,
        :password,
        :gender
      )
    end

    devise_parameter_sanitizer
      .permit(:sign_in) do |u|
      u.permit(
        :email,
        :password,
        :remember_me
      )
    end

    devise_parameter_sanitizer
      .permit(:account_update) do |u|
      u.permit(
        :first_name,
        :last_name,
        :email,
        :image,
        :phone_number,
        :designation,
        :signature,
        :current_password,
        :password_confirmation,
        :password,
        :gender
      )
    end
  end

  def invalid_entry
    logger.error "Attempt to access invalid feature: #{params[:id]}"
    redirect_back fallback_location: root_path,
                  flash: { error: 'Operation could not be completed.' }
  end

end
