Rails.application.routes.draw do
  resources :skater_tricks
  resources :tricks
<<<<<<< HEAD
  resources :skaters

  resources :users
=======
  resources :skaters, only:[:index]
>>>>>>> 7003051 (onclick render)
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
