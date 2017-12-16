class V1::SessionsController < ApplicationController
  #for signing in
  def create
    user = User.where(email: params[:email]).first

    #binding.pry

    if user && user.valid_password?(params[:password])
      #render json: user.as_json(only: [:email]), status: :created
      render json: user.as_json(only: [:email, :authentication_token]), status: :created
    else
      head(:unauthorized)
    end
  end

  #for signing out
  def destroy
    #binding.pry
    current_user && current_user.authentication_token = nil
    if current_user.save
      head(:ok)
    else
      head(:unauthorized)
    end
  end
end
