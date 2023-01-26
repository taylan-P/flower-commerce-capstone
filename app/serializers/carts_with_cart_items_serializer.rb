class CartsWithCartItemsSerializer < ActiveModel::Serializer
  attributes :id , :products
  
#  has_many :cart_items
  # has_one :products
end
