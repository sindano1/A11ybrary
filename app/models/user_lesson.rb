class UserLesson < ApplicationRecord
    has_many :saved_lessons, dependent: :destroy

    belongs_to :user
    belongs_to :lesson
    has_many :codes, through: :lesson
end
