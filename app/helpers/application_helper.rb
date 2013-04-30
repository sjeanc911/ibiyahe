module ApplicationHelper

  def get_active_page(params, current_controller)
    puts params.inspect
    if params[:controller] == current_controller
      "active"
    else
      ""
    end
  end
end
