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

#USER_AVATARS
User.all.each_with_index do |user, i|
    Image.create(
      imageable_id: user.id,
      imageable_type: "User",
      url: Cloudinary::Utils.cloudinary_url(
              "avatars/#{i}.jpg")
      )
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
          "Sourdough bread tour",
          "Sail the bay"]
hk_tours = ["Tour fishing boat",
            "Learn to make cha-su bao",
            "High-rise barhopping tour",
            "Vegan food tour",
            "Temples Tour"]
uio_tours = ["City Tour",
            "Horseback riding on a volcano",
            "Street food tour",
            "Learn folkloric dancing",
            "Market tour"]

dest_tours = {sf=>sf_tours, hk=>hk_tours, uio =>uio_tours}

dest_tours.each do |destination, tours|
  tours.each do |t|
    p = ""
    10.times {p += Faker::Lorem.paragraph}
    destination.tours.create(
      title: t,
      description: p,
      user_id: [1,2,3].sample,
      price: prices.sample
      )
  end
end

#IMAGES
NUM_IMGS = 3
Tour.all.each do |tour|
  NUM_IMGS.times do |i|
    # img = $.cloudinary.image('static/backdrop.jpg' )
    Image.create(
      imageable_id: tour.id,
      imageable_type: "Tour",
      url: Cloudinary::Utils.cloudinary_url(
              "seeds/#{tour.id}_#{i+1}.jpg")
      )
  end
end


#Cloudinary upload from assets
# Tour.all.each do |tour|
#   (1..3).to_a.each do |i|
#     file = "#{tour.id}_#{i}"
#     Cloudinary::Uploader.upload("db/seed_images/#{file}.jpg", {
#         public_id: "seeds/#{file}",
#         eager: [ { :width => 200, :height => 200, :crop => :fit},
#                 { :width => 100, :height => 100, :crop => :fit} ]
#       });
#   end
# end


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

User.all.each do |u|
  Tour.all.each do |t|
    Review.create(
      tour_id: t.id,
      user_id: u.id,
      rating: (1..5).to_a.sample,
      description: Faker::Lorem.paragraph)
  end
end
