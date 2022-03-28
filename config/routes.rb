Rails.application.routes.draw do

  resources :posts
  resources :companies
  resources :questions do
    resources :answers do
      collection do
        post :add_answer
      end
    end
  end
  resources :answers do
    put :accept_unaccepted_answer
  end
  resources :user_comment_vote do
    post :answer_up_vote
    post :answer_down_vote
  end
  resources :user_question_vote do
    post :question_up_vote
    post :question_down_vote
  end
  devise_for :users,
             controllers: {
               omniauth_callbacks: 'users/omniauth_callbacks',
               registrations: 'users/registrations'
             }

  root 'homes#index'
  resources :users do
    member do
      get :activate_user
      post :update_activate_user
    end
  end

end
