class Admin::SessionsController < AdminController
    # skip_before_action :authorize, only: [:create, :destroy, :new]

  
    def create
      user = User.find_by(username: params[:username])
      if user&.authenticate(params[:password])
        session[:user_id] = user.id
        redirect_to admin_lessons_path
      else
        # flash.alert = "Unauthorized"
        render :new
      end
    end
  
    def destroy
      session.delete :user_id
    end

    def new
    end


    
end
