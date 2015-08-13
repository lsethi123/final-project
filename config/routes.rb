Rails.application.routes.draw do
  root 'static_pages#root'
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :destinations, only: [:show, :index]
    resources :tours, only: [:show]
    resources :bookings, only: [:create, :update, :index, :show]
    post 'bookings/:id/cancel' => 'bookings#cancel'
    # get 'destinations/search' => 'destination#search'
  end



end
