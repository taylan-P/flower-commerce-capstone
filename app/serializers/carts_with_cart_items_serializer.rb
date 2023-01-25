class CartsWithCartItemsSerializer < ActiveModel::Serializer
  # attributes :user
  # has_one :user
  has_many :cart_items
end
