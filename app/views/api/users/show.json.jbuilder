json.extract! @user, :id, :username, :about, :name
json.image do
  json.imageable_id @user.id
  json.imageable_type 'User'
end
