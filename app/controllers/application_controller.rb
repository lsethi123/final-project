class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
end
class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?, :ensure_logged_in

  def log_in!(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
  end

  def log_out!
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def current_user
   @current_user ||=User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !current_user.nil?
  end

  def ensure_logged_in
    unless logged_in?
      render json: {message: "Must be logged in"}, status: 401
    end
  end

  def ensure_owner
    tour = Tour.find(params[:id])
    unless tour.provider == current_user
      render json: {message: "Can't delete or modify other peoples tours"}, status: 401
    end
  end

  def user_params
    params.require(:user).permit(:username, :password, :name, :about)
  end
end
