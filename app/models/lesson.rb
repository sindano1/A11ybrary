class Lesson < ApplicationRecord
    has_many :user_lessons, dependent: :destroy
    has_many :users, through: :user_lessons

    has_many :codes, dependent: :destroy
end
