class PotholesController < ApplicationController

  def index
      @potholes = Pothole.all
  end

  def new
    @project = Pothole.new
  end

  def create
    @pothole = Pothole.create pothole_params
    redirect_to potholes_path
  end

  private

  def pothole_params
    params.require(:pothole).permit(:unique_key, :created_at_date, :zipcode, :address, :community_board, :latitude, :longitude, :community_id)
  end

end
