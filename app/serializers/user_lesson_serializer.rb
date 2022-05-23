class UserLessonSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :lesson_id, :notes, :completed

  belongs_to :lesson
end
