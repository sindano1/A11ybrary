class LessonSerializer < ActiveModel::Serializer
  attributes :id, :title, :accessibility_features, :lesson_type, :has_transcript, :transcript, :content

  has_many :codes
  has_many :user_lessons
end
