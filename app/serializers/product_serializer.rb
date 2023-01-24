class ProductSerializer < ActiveModel::Serializer
  attributes  :name, :price, :inventory_count , :image
end
