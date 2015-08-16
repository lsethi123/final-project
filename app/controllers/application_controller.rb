class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
end
class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?, :ensure_logged_in

  def log_in!(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
  end

  def log_out!
    current_user.reset_session_token!
    session[:session_token]=nil
    # TA: Leave spaces around operators.
  end

  def current_user
   User.find_by(session_token: session[:session_token])
    # TA: It's good to memoize (||=) current_user to an instance variable, to
    # avoid hitting the database more than once per request.
  end

  def logged_in?
    !current_user.nil?
  end

  def ensure_logged_in
    unless logged_in?
      flash[:errors]=["Must be logged in"]
      render json: {message: "Not logged in"}, status: 401
    end
  end

  def user_params
    params.require(:user).permit(:username, :password, :name, :about)
  end
end
