# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

cities = ["San Francisco", "New York", "Los Angeles", "Chicago"]

cities.each do |city|
  Destination.create(name: city)
end

sf = Destination.first
tours = ["Walking Tour of Chinatown",
          "Sourdough bread workshop",
          "Biking the Mission",
          "Foraging food tour",
          "Walk Lands End"]
tours.each do |tour|
  sf.tours.create(
    title: tour,
    description: Faker::Lorem.paragraph
  )
end
