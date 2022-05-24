class CodeSerializer < ActiveModel::Serializer
  attributes :id, :lesson_id, :accessible_code, :inaccessible_code, :language

  belongs_to :lesson
end
