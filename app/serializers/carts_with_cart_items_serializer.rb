class CartsWithCartItemsSerializer < ActiveModel::Serializer
  attributes :id , :products
  
  # ha_one :products
end
