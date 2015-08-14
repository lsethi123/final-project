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

  def update
    image = Image.find(params[:id])
    if image.update(image_params)
      render json: image
    else
      render json: image, status: :uprocessable_entity
    end
  end

  def destroy
    image = Image.find(params[:id])
    image.destroy
    render json: image
  end

  def index
    images = Image.all
    render json: images
  end

  private
  def image_params
    params.require(:image).permit(:url, :thumb_url, :imageable_type, :imageable_id)
  end

end
