class Api::ImagesController < ApplicationController
  def create
    # debugger
    image = Image.new(image_params)
    if image.save
      render json: image
    else
      render json: {message: 'failure'}, status: 422
    end
  end

  def show
    render json: Image.find(params[:id])
  end

  def index
    images = Image.all
    render json: images
  end

  private
  def image_params
    params.require(:image).permit(:url, :thumb_url, :imageable_type)
  end

end
