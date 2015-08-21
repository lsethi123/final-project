json.extract! @tour, :title, :description, :id, :destination_id, :price
json.provider do
  json.extract! @tour.provider, :id, :name, :about, :username
  json.avatar_url @tour.provider.avatar_url
end

json.destination do
  json.extract! @tour.destination, :id, :name
end

json.average_rating @average

json.images @images do |image|
  json.extract! image, :url
end

json.reviews @tour.reviews do |review|
  json.extract! review, :rating, :description, :user_id, :tour_id
end
