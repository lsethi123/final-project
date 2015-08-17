json.extract! @tour, :title, :description, :id, :destination_id, :price
json.provider do
  json.id @tour.provider.id
  json.name @tour.provider.name
  json.about @tour.provider.about
  json.username @tour.provider.username
end

json.average_rating @average

json.images @images do |image|
  json.extract! image, :url
end

json.reviews @tour.reviews do |review|
  json.extract! review, :rating, :description, :user_id, :tour_id
end
