class Pothole < ActiveRecord::Base
  belongs_to :community
  validates :unique_key, presence: true
  validates :zipcode, presence: true
  validates :community_id, numericality: true
  validates :latitude, presence: true
  validates :longitude, presence: true

  #data = File.read('lib/tasks/CB6.csv')
  #CSV.parse(data)



end