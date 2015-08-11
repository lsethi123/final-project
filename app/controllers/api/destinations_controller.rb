class Api::DestinationsController < ApplicationController
  def show
    @place = Destination.find(params[:id])
    render :show
  end

  def index
    @places = Destination.all
    render json: @places
  end

end
