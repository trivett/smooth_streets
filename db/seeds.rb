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

x = Pothole.create

potholes.each do |pothole|
  x.unique_key = pothole[0]
  x.created_at_date = pothole[1]
  x.zipcode = pothole[2]
  x.address = pothole[3]
  x.latitude = pothole[4]
  x.longitude = pothole[5]

end


#0 : "Unique.Key",
#1 : "Created.Date",
#2 : "Incident.Zip",
#3 : "Incident.Address",
#4 : "Latitude",
#5 : "Longitude"