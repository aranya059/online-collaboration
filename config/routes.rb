Rails.application.routes.draw do

  resources :companies
  resources :questions do
    resources :answers do
      collection do
        post :add_answer
      end
    end
  end
  resources :answers
  devise_for :users,
             controllers: {
               omniauth_callbacks: 'users/omniauth_callbacks',
               registrations: 'users/registrations'
             }

  root 'homes#index'
  resources :companies
  resources :users do
    member do
      get :activate_user
      post :update_activate_user
    end
  end

end
