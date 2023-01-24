# seed.rb
require 'faker'

# Create users
5.times do
  User.create(username: Faker::Name.unique.name, password: Faker::Alphanumeric.alphanumeric(number: 10))
end

# Create products
# 10.times do
#   Product.create(name: Faker::Commerce.product_name, price: Faker::Commerce.price, inventory_count: Faker::Number.within(range: 1..100),image: Faker::LoremPixel.image())
# end
20.times do
  Product.create!(name: Faker::Commerce.product_name, price: Faker::Commerce.price, inventory_count: Faker::Number.within(range: 1..100), image: "https://picsum.photos/640/480?random&category=flower")
end






# Create carts
users = User.all
users.each do |user|
  cart = Cart.create(user_id: user.id)
  # Create cart items
  rand(1..5).times do
    product = Product.find(rand(Product.first.id..Product.last.id))
    cart.cart_items.create(product_id: product.id, quantity: rand(1..5))
  end
 end
