class ProductsController < ApplicationController
    # skip_before_action :authorize
     def index
        products = Product.all
        render json: products , status: :ok
    end

    # def create
    #     product = Product.create!(product_params)
    #     render json: product, status: :created
    # end

    # private
    # def product_params
    #     params.permit(:name, :price , :inventory_count)
    # end

end
