class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :email, :is_admin
end
