json.array! @bookings do |booking|
  json.extract! booking, :id, :status, :tour_id, :tour_date, :num_people
  json.tour_city booking.tour.destination.name
  json.tour do
    json.extract! booking.tour, :title
    json.images booking.tour.images do |image|
      json.extract! image, :url
    end
  end
end
