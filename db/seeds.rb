# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

#USERS
usernames = %w(lisa joe demo)
usernames.each do |username|
  User.create(
    username: username,
    password: "password",
    name: "#{username.titlecase} #{Faker::Name.last_name.first}.",
    about: Faker::Lorem.paragraph)
end

#DESTINATIONS
cities = ["San Francisco", "Hong Kong", "Quito"]
cities.each do |city|
  Destination.create(name: city)
end

#TOURS
sf = Destination.first
hk = Destination.find(2)
uio = Destination.last

prices = [50, 75, 100, 150]

sf_tours = ["Walking Tour of Chinatown",
          "Fruit salad workshop",
          "Biking the Mission",
          "Sail on the bay",
          "Sourdough bread tour",
          "Picnic in Dolores Park"]
hk_tours = ["Tour fishing boat",
            "Learn to make cha-su bao",
            "High-rise barhopping tour",
            "Vegan food tour"]
uio_tours = ["Horseback riding",
            "City tour",
            "Street food tour",
            "Learn folkloric dancing",
            "Market tour"]

dest_tours = {sf=>sf_tours, hk=>hk_tours, uio =>uio_tours}

dest_tours.each do |destination, tours|
  tours.each do |t|
    destination.tours.create(
      title: t,
      description: Faker::Lorem.paragraph,
      user_id: [1,2,3].sample,
      price: prices.sample
  )
end

#IMAGES
Tour.all.each do |tour|

var url = $.cloudinary.image("/seeds/#{tour_id}/#{img_id}").attr('url');


#BOOKINGS (Lisa and demo are booked on all tours)
users = [User.first, User.last]
Tour.all.each do |tour|
  time = Time.now + rand(30).days
  users.each do |user|
    Booking.create(tour_id: tour.id,
      user_id: user.id,
      tour_date: time,
      status: ["requested", "confirmed", "cancelled"].sample )
  end
end
