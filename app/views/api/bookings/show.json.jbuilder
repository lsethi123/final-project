json.extract! @booking, :id, :status, :tour_id, :tour_date
json.tour_name @booking.tour.title
json.tour_city @booking.tour.destination.name
