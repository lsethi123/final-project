class Api::DestinationsController < ApplicationController
  def show
    @place = Destination.find(params[:id])
    render :show
  end
end
