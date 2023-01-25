class CartItemsController < ApplicationController
    skip_before_action :authorize
     def show
        cart = Cart.find(params[:id])
        render json: cart, status: :ok
    end
    def index
        carts = Cart.all
        render json: carts , status: :ok
    end
    def create
        cart_id = params[:cart_id]
        product_id = params[:product_id]
        quantity = params[:quantity]
        cart_item = CartItem.new(cart_id: cart_id, product_id: product_id, quantity: quantity)
        if cart_item.save
            render json: { message: "Successfully added product to cart!" }, status: :created
        else
            render json: { errors: cart_item.errors }, status: :unprocessable_entity
        end
    end
end
