json.extract! @place, :id, :name
json.tours @place.tours do |tour|
  json.extract! tour, :title, :description, :id
  if tour.images && tour.images.length >0
    json.extract! tour.images.first, :thumb_url
  end
end
