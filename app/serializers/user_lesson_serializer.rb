class UserLessonSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :lesson_id, :notes, :completed

  belongs_to :lesson
  has_many :codes, through: :lesson
end
