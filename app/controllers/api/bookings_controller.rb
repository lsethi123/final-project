class Api::BookingsController < ApplicationController
  # before_action :ensure_logged_in, only: [:create, :update]

  def show
    @booking = Booking.find(params[:id])
    render :show
  end

  def index
    if logged_in?
      @bookings = current_user.bookings.joins({:tour =>:destination})
    else
      @bookings = []
    end
    render :index
    # render json: @bookings
  end

  def create
    booking = Booking.new(booking_params)
    booking.user_id = current_user.id
    booking.status = "requested"
    if booking.save
      render json: booking
    else
      render json: booking.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    booking = Booking.find(id: params[:id])
    if booking.update(booking_params)
      render json: booking
    else
      render json: booking.errors.full_messages, status: :unprocessable_entity
    end
  end

  def booking_params
    params.require(:booking).permit(:tour_id, :tour_date)
  end

end
