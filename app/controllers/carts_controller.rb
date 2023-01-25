class CartsController < ApplicationController
    skip_before_action :authorize
    def index
        carts = Cart.all
        render json: carts , status: :ok
    end
    def show
        cart = Cart.find(params[:id])
        render json: cart, status: :ok
    end
    # def create
    #     carts = Cart.create!(cart_params)
    #     render json: carts, status: :created
    # end

    # private
    # def(cart_params)
    #     params.permit(:user)
    # end
end
