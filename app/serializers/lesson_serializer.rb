class LessonSerializer < ActiveModel::Serializer
  attributes :id, :title, :accessibility_features, :type, :has_transcript, :transcript, :content
end
