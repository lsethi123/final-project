class Api::ToursController < ApplicationController

  def show
    @tour = Tour.find(params[:id])
    render :show
  end

end
