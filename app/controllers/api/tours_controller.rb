class Api::ToursController < ApplicationController
# before_action :ensure_logged_in
  def show
    @tour = Tour.find(params[:id])
    render :show
  end

  def create
    tour = Tour.new(tour_params)
    tour.user_id = current_user.id

    if (tour.save)
      render json: tour
    else
      render json: tour, status: :unprocessable_entity
    end
  end

  def tour_params
    params.require(:tour).permit(:destination_id, :title, :description, :price)
  end

end
