Rails.application.routes.draw do
  resources :skater_tricks
  resources :tricks
  resources :skaters
  resources :users, only: [:new, :create, :index, :show]

  post '/login', to: 'users#login'
  post "/profile", to: 'users#profile'
end
