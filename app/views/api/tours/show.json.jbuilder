json.extract! @tour, :title, :description, :id, :destination_id
json.provider do
  json.id @tour.provider.id
  json.name @tour.provider.name
  json.about @tour.provider.about
  json.username @tour.provider.username
end

json.images @images do |image|
  json.extract! image, :url
end
