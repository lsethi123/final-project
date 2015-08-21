json.tours @tours do |tour|
  json.extract! tour, :title, :description, :id, :price
  json.images tour.images do |image|
    json.extract! image, :url
  end
  json.reviews tour.reviews do |review|
    json.extract! review, :rating
  end
  json.provider do
    json.extract! tour.provider, :id, :name, :username, :about
  end
end
