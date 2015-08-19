json.extract! @tour, :title, :description, :id, :destination_id, :price
json.extract! @tour.provider, :id, :name, :about, :username
json.average_rating @average

json.images @images do |image|
  json.extract! image, :url
end

json.reviews @tour.reviews do |review|
  json.extract! review, :rating, :description, :user_id, :tour_id
end
