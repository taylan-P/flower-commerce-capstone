class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordNotFound , with: :not_found
  rescue_from ActiveRecord::RecordInvalid, with: :invalid


  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  before_action :authorize
  
  private


  def authorize
    @current_user = User.find_by(id: session[:user_id])

    render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
  end

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end

  def not_found(error)
    render json: {error:"#{error.model} not found"} , status: :not_found
  end
  
  def invalid(invalid)
    render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end
 
end
