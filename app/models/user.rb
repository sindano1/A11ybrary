class User < ApplicationRecord
    has_many :user_lessons, dependent: :destroy
    has_many :lessons, through: :user_lessons

        has_secure_password

    alias_attribute :new_username, :username
    alias_attribute :new_password, :password

end
