json.extract! @user, :id, :username, :about, :name
json.avatar_url @user.avatar_url()
json.image do
  json.imageable_id @user.id
  json.imageable_type 'User'
end
json.tours @user.tours do |tour|
  json.extract! tour, :id, :title, :price, :user_id
  json.images tour.images do |image|
    json.extract! image, :url
  end
end
