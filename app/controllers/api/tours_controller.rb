class Api::ToursController < ApplicationController
# before_action :ensure_logged_in
  def show
    @tour = Tour.find(params[:id])
    @images = @tour.images
    render :show
  end

  def create
    @tour = current_user.tours.new(tour_params)

    if (@tour.save)
      render :show
    else
      render json: tour, status: :unprocessable_entity
    end
  end

  def tour_params
    params.require(:tour).permit(:destination_id, :title, :description, :price)
  end

end
