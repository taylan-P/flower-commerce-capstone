class UserSerializer < ActiveModel::Serializer
  attributes   :id , :username 
  has_one :carts , serializer: CartsWithCartItemsSerializer
  
end
