class Api::ToursController < ApplicationController
# before_action :ensure_logged_in
  def show
    @tour = Tour.find(params[:id])
    render :show
  end

end
