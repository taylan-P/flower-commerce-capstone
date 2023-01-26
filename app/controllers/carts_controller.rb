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

    def create
    cart = Cart.create!(cart_params)
    render json: cart, status: :created
    end


   # def create
    #     @current_user.cart.cart_items.create!(cart_item_params)
    # end

    private

    def cart_params
        params.permit(:user_id)
    end

end
