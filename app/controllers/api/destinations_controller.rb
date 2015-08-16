class Api::DestinationsController < ApplicationController
  def show
    @place = Destination.find(params[:id])
    @tours = @place.tours.includes(:images)
    render :show
  end

  def index
    @places = Destination.all
    render json: @places
  end

end
