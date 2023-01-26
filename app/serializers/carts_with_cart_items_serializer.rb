class CartsWithCartItemsSerializer < ActiveModel::Serializer
  attributes :products
  
  # ha_one :products
end
