class UserLesson < ApplicationRecord
    has_many :saved_lessons, dependent: :destroy

    belongs_to :user
    belongs_to :lesson
end
