
class Pothole < ActiveRecord::Base
  belongs_to :community
  after_create :make_call


  #validates :unique_key, presence: true
  #validates :zipcode, presence: true
  #validates :community_id, numericality: true
  #validates :latitude, presence: true
  #validates :longitude, presence: true

  def send_email
    BoardMailer.email_community_board(self).deliver
  end


  def self.get_zipcode(latitude, longitude)
    Geocoder.search("#{latitude},#{longitude}").first.data['address_components'].last['long_name']
  end

  def make_call
    account_sid = 'AC7a2a4f9289a9fba84189773e05ffe2b7'
    auth_token = 'e1710047d73c3dce955e56d2734793a5'

      @client = Twilio::REST::Client.new(account_sid, auth_token)

    @client.account.calls.create(
      :url => "http://twimlets.com/echo?Twiml=%3CResponse%3E%0A%3CSay%3EDear%20Members%20of%20Community%20Board%206.%20I%20am%20calling%20you%20to%20report%20a%20pothole%20that%20needs%20to%20be%20filled%20for%20the%20safety%20and%20health%20of%20the%20community.%20Here%20is%20the%20location%20information%20for%20the%20pothole.%20Thank%20you!%3C%2FSay%3E%0A%3C%2FResponse%3E&",
      :to => "+12085207042",
      :from => "+12082285521"
    )
  end
end


