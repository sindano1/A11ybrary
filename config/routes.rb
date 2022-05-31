Rails.application.routes.draw do
  
  resources :codes
  resources :saved_lessons
  resources :lessons
  resources :user_lessons
  resources :users

  # Rails login/logout
  namespace :admin do
    get "/login", to: "sessions#new"
    post "/login", to: "sessions#create"

    resources :lessons do
      resources :codes, except: [:index]
    end

  end



  # Custom routes for login/logout
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # Custom route to stay logged in
  get "/auth", to: "sessions#show"

  get "/your-lessons", to: "users#your_lessons"

  get '/your-lesson-sandbox', to: "user_lessons#your_lesson_sandbox"

  get '/lesson-sandbox/:id', to: "user_lessons#lesson_sandbox"
  patch '/lesson-sandbox/:id', to: "user_lessons#update_notes"



  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
