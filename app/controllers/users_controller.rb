class UsersController < ApplicationController
    before_action :find_user, only: [:show, :update, :destroy]
    skip_before_action :authorize, only: [:create, :show, :index, :your_lessons]

    def index
        render json: User.all
    end
    
    def show
        render json: @user
    end

    def create
        user = User.create!(user_params)
        session[:user_id] =  user.id
        render json: user, status: :created
    end

    def update
        @user.update!(user_params)
        render json: @user, status: :accepted
    end

    def destroy
        @user.destroy
        head :no_content
    # double check this one -> render json: {}, status :accepted
    end

    def your_lessons
        currentUser = User.find(session[:user_id])
        render json: currentUser.user_lessons
    end

private

    def find_user
        @user = User.find(params[:id])
    end

    def user_params
        params.permit(:username, :password, :email, :new_username, :new_password)
    end

end
