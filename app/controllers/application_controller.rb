class ApplicationController < ActionController::API
<<<<<<< HEAD
  # before_action :require_login
  # helper_method :current_user

  # def require_login
  #   redirect_to new_session_path unless session.include? :user_id
  # end

  # def current_user
  #   @current_user ||= User.find(session[:user_id]) if session[:user_id]
  # end

end
=======

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def get_secret_key
      "123"
    end

    def generate_token(user_id)
      JWT.encode({user_id:user_id}, get_secret_key)
    end

    def decode_token(token)
      JWT.decode(token, get_secret_key)[0]["user_id"]
    end

    private

    def render_not_found_response(exception)
      render json: { error: "#{exception.model} not found" }, status: :not_found
    end
  
    def render_unprocessable_entity_response(exception)
      render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

end
>>>>>>> 66639a7130722bf7e014b980a1d3c0147078269d
