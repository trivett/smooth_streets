# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

require 'csv'

data = File.read('lib/tasks/CB6.csv')
potholes = CSV.parse(data)


potholes.each do |pothole|
  a = Pothole.create(unique_key: pothole[1], created_at_date: pothole[2], zipcode: pothole[3], address: "#{pothole[4]}", latitude: pothole[5], longitude: pothole[6])
end
#0 : "Unique.Key",
#1 : "Created.Date",
#2 : "Incident.Zip",
#3 : "Incident.Address",
#4 : "Latitude",
#5 : "Longitude"

