  class PotholesController < ApplicationController

  def index
      @potholes = Pothole.all
  end

  def new
    @pothole = Pothole.new
  end

  def create
    @pothole = Pothole.create pothole_params
    flash[:notice] = "Thank you for adding the pothole. Your local representatives have been notified."
    zipcode = Pothole.get_zipcode(@pothole.latitude, @pothole.longitude)
    @pothole.update(zipcode: zipcode)
    @pothole.send_email
    redirect_to root_path
  end

  private

  def pothole_params
    params.require(:pothole).permit(:unique_key, :created_at_date, :zipcode, :address, :community_board, :latitude, :longitude, :community_id)
  end

end
