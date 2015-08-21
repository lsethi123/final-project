json.extract! @booking, :id, :status, :tour_id, :tour_date, :num_people
json.booking_url @booking.tour.images.first.url
json.tour_city @booking.tour.destination.name
json.tour do
  json.extract! @booking.tour, :title
end
