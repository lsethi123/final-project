Rails.application.routes.draw do
  root 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resources :destinations, only: [:show, :index]
    resources :tours, only: [:show]
    # get 'destinations/search' => 'destination#search'
  end
  
end
