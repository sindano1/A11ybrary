class LessonSerializer < ActiveModel::Serializer
  attributes :id, :title, :accessibility_features, :lesson_type, :has_transcript, :transcript, :content
end
