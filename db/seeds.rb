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
  User.create(username: username, password: "password")
end

#DESTINATIONS
cities = ["San Francisco", "New York", "Los Angeles", "Chicago"]
cities.each do |city|
  Destination.create(name: city)
end

#Images
image_urls = [
  "https://aarynvaughan.files.wordpress.com/2014/06/sf-trolley2-634x350.jpg",
]

#TOURS
sf = Destination.first
sf_tours = ["Walking Tour of Chinatown",
          "Sourdough bread workshop",
          "Biking the Mission",
          "Foraging food tour",
          "Walk Lands End",
          "Picnic in Dolores Park"]
sf_tours.each do |tour|
  sf.tours.create(
    title: tour,
    description: Faker::Lorem.paragraph,
    user_id: 1,
    price: [50, 100, 150, 129, 200].sample
  )
end

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
