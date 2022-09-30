Rails.application.routes.draw do
  resources :skater_tricks
  resources :tricks
  resources :skaters
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
