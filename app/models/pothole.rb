class Pothole < ActiveRecord::Base
  belongs_to :community

  #validates :unique_key, presence: true
  #validates :zipcode, presence: true
  #validates :community_id, numericality: true
  #validates :latitude, presence: true
  #validates :longitude, presence: true

  def send_email
    BoardMailer.email_community_board(self).deliver
  end

  def self.get_zipcode(latitude, longitude)
    binding.pry
    Geocoder.search("#{latitude},#{longitude}").first.data['address_components'].last['long_name']
    binding.pry
  end

end



