class Api::DestinationsController < ApplicationController
  def show
    @place = Destination.find(params[:id])
    render :show
  end

  def index
    if params[:query].present?
      puts params[:query]
      @places = Destination.where('LOWER(name) LIKE ?', "%#{params[:query].downcase}%")
      # @places = Destination.where('name~?', params[:query])
    else
      @places = Destination.none
    end
    render json: @places
  end

  # def search
  #   if params[:query].present?
  #     @places = Destination.where('name~?', params[:query])
  #   else
  #     @places = Destination.none
  #   end
  # end

end
