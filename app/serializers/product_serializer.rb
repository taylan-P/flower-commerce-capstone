class ProductSerializer < ActiveModel::Serializer
  attributes  :id ,:name, :price, :inventory_count , :image
end
