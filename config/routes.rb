Rails.application.routes.draw do
  root 'static_pages#root'
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :destinations, only: [:show, :index]
    resources :tours, only: [:show, :create]
    resources :bookings, only: [:create, :update, :index, :show]
    resources :images, except: [:edit]
    resources :users, only: [:show]
    resources :reviews, only: [:show, :create]
    post 'bookings/:id/cancel' => 'bookings#cancel'
    # get 'destinations/search' => 'destination#search'
  end



end
