Rails.application.routes.draw do
  resources :skater_tricks
  resources :tricks
  resources :skaters
  resources :users

  post '/login', to: 'users#login'
  post "/profile", to: 'users#profile'
  # get "/profile", to: 'users#show'
end
