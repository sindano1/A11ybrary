class SavedLessonSerializer < ActiveModel::Serializer
  attributes :id, :user_lesson_id, :on_git, :code, :notes
end
