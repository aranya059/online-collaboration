class Users::RegistrationsController < Devise::RegistrationsController
  before_action :configure_permitted_parameters, only: %i[update]

  protected
  def sign_up_params
    params.require(:user).permit(:first_name, :last_name, :phone_number, :image, :email, :password, :gender, :company_id)
  end

  def account_update_params
    params.require(:user).permit(:first_name, :last_name, :phone_number, :image,:email, :password, :gender, :current_password, :company_id)
  end

  def update_resource(resource, params)
    if resource.signed_with_microsoft?
      resource.update_without_password(params)
    else
      resource.update_with_password(params)
    end
  end
end
