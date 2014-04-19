class Pothole < ActiveRecord::Base
  belongs_to :community
  after_create :send_email

  #validates :unique_key, presence: true
  #validates :zipcode, presence: true
  #validates :community_id, numericality: true
  #validates :latitude, presence: true
  #validates :longitude, presence: true

  def send_email
    BoardMailer.email_community_board(self).deliver
  end

end



