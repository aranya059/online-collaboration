Rails.application.routes.draw do

  resources :companies
  resources :questions
  devise_for :users,
             controllers: {
               omniauth_callbacks: 'users/omniauth_callbacks',
               registrations: 'users/registrations'
             }

  root 'homes#index'
  resources :companies do
    member do
      delete :delete_company_attachment
    end
  end

  resources :project_reports
  resources :projects do
    resources :project_reports do
      collection do
        get :fetch_representative
      end
    end
  end
  resources :representatives
  resources :users do
    member do
      get :activate_user
      post :update_activate_user
    end
  end

end
