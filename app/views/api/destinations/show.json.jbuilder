json.extract! @place, :id, :name
json.tours @place.tours do |tour|
  json.extract! tour, :title, :description
end
