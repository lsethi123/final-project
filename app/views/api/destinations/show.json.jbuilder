json.extract! @place, :id, :name
json.tours @place.tours do |tour|
  json.extract! tour, :title, :description, :id
  json.provider do
    json.extract! tour.provider, :id, :name, :username, :about
  end
  if (tour.images.length > 0)
    json.extract! tour.images.first, :thumb_url, :url
  end
end
