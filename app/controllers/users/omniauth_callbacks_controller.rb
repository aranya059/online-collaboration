class Users::OmniauthCallbacksController < Devise::RegistrationsController
  skip_before_action :verify_authenticity_token

  def azure_activedirectory_v2
    response_params = request.env['omniauth.auth']['info']
    @user = User.find_by_email(response_params['email'])
    if @user.present?
      sign_in_and_redirect @user, event: :authentication
    else
      @user = User.new(first_name: response_params[:first_name],
                       last_name: response_params[:last_name],
                       email: response_params[:email].downcase,
                       gender: User::MALE,
                       password: Devise.friendly_token[6, 20],
                       authentication_type: User::MICROSOFT)
      @user.save(validate: false)
      sign_in_and_redirect @user, event: :authentication
    end

    def failure
      flash[:alert] = 'Invalid token. Please try again'
      redirect_to root_path
    end
  end
end
