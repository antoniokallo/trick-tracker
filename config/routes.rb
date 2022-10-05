Rails.application.routes.draw do
  resources :skater_tricks
  resources :tricks
  resources :skaters
  resources :users
end
