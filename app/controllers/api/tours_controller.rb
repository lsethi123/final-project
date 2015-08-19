class Api::ToursController < ApplicationController
before_action :ensure_logged_in, only: [:create]

  def show
    @tour = Tour.find(params[:id])
    @images = @tour.images
    @average = Review.where(tour_id: params[:id]).average('rating')
    render :show
  end

  def create
    @tour = current_user.tours.new(tour_params)
    if (@tour.save)
      render :show
    else
      render json: tour.errors.full_messages, status: :unprocessable_entity
    end
  end

  def tour_params
    params.require(:tour).permit(:destination_id, :title, :description, :price)
  end

end
