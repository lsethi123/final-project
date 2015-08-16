json.extract! @place, :id, :name
json.tours @place.tours do |tour|
  json.extract! tour, :title, :description, :id
  json.images tour.images do |image|
    json.extract! image, :url
  end
  json.provider do
    json.extract! tour.provider, :id, :name, :username, :about
  end
end
