class Api::DestinationsController < ApplicationController

  def show
    @place = Destination.find(params[:id])
    @tours = @place.tours.includes(:images, :provider)
      .joins(:reviews)
      .group('tour_id')
      .select('tours.* average(rating) as average_rating')
    render :show
  end

  def index
    @places = Destination.all
    render json: @places
  end

  def search
    debugger
  end

end
