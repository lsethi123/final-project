class Api::ReviewsController < ApplicationController
  before_action :ensure_logged_in, only: [:create]

  def create
    @review = Review.new(review_params)
    @review.user_id = current_user.id

    if @review.save
      render json: @review
    else
      render json: @review.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    @review = Review.find(params[:id])
    render json: @review
  end

  def index
  end

  def review_params
    params.require(:review).permit(:tour_id, :user_id, :description, :rating)
  end

end
