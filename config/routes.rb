Rails.application.routes.draw do
  resources :users
  resources :users do
    resources :decks
    resources :formats
  end
  scope :decks do
    resources :cards
  end

  post '/decks/cards/new', to: 'cards#new'

  root 'sessions#new'

  get '/login', to: 'sessions#new', as: 'login'
  post '/session', to: 'sessions#create', as: 'session'
  delete '/session/', to: 'sessions#destroy', as: 'logout'



  get '/auth/facebook/callback' => 'sessions#create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
