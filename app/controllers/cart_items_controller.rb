class CartItemsController < ApplicationController
    # skip_before_action :authorize
     def show
        cart = CartItem.find(params[:id])
        render json: cart, status: :ok
    end
    def index
        carts = CartItem.all
        render json: carts , status: :ok
    end
    def create
        cart_item = CartItem.create!(cart_item_params)
        render json: cart_item, status: :created
    end
    # def create
    #     @current_user.cart.cart_items.create!(cart_item_params)
    # end

    private
    def cart_item_params
        params.permit(:cart_id , :product_id , :quantity)
    end
end
