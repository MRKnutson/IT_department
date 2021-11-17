Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # (C)reate (2 steps - get form and put info)
  get "/employees/new", to: "employees#new"
  post "/employees", to: "employees#create" 

  # (R)ead (2 - index and single)
  get "/employees", to: "employees#index" 

  get "/employees/:id", to: "employees#show"

  # (U)pdate (2 steps - get form and put info)

  # (D)estroy


end
