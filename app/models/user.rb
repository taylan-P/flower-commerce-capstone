class User < ApplicationRecord
    has_many :carts

    has_secure_password

    validates :username, presence: true , uniqueness: true
end
