Rails.application.routes.draw do
  
  resources :cart_items, only: [:index,:show ,:create]
  resources :carts, only: [:show,:index , :create]
  # resources :products , only: [:index]
  # resources :cart_items , only: [:create]
  # resources :products
  # resources :product_categories
  resources :users
   get '/products', to: 'products#index'
   post "/signup", to: "users#create"
   get "/me", to: "users#show"
   post "/login", to: "sessions#create"
   delete "/logout", to: "sessions#destroy"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
