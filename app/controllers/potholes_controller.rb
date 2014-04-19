class PotholesController < ApplicationController

  def index
      @potholes = Pothole.all
  end

  def new
    @project = Pothole.new
  end

  def create
    @pothole = Pothole.create pothole_params
    flash[:notice] = "Thank you for adding the pothole. Your local representatives have been notified."
    redirect_to root_path
  end

  private

  def pothole_params
    params.require(:pothole).permit(:unique_key, :created_at_date, :zipcode, :address, :community_board, :latitude, :longitude, :community_id)
  end

end
