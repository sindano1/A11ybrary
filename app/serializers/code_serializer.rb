class CodeSerializer < ActiveModel::Serializer
  attributes :id, :lesson_id, :code, :language
end
