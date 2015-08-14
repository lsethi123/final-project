json.extract! @tour, :id, :title, :description, :destination_id
json.images @images do |image|
  json.extract! image, :url
end
