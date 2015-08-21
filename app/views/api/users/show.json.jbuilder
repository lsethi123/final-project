json.extract! @user, :id, :username, :about, :name
json.avatar_url @user.avatar_url()
json.image do
  json.imageable_id @user.id
  json.imageable_type 'User'
end
