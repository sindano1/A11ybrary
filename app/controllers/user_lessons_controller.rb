class UserLessonsController < ApplicationController
        before_action :find_user_lesson, only: [:show, :update, :destroy]
        
            def index
                render json: UserLesson.all
            end
        
            def show
                render json: @user_lesson
            end
        
            def create
                user_lesson = UserLesson.create!(user_lesson_params)
                render json: user_lesson, status: :created
            end
        
            def update
                @user_lesson.update!(user_lesson_params)
                render json: @user_lesson, status: :accepted
            end
        
            def destroy
                @user_lesson.destroy
                head :no_content
            # double check this one -> render json: {}, status :accepted
            end
            
           
        
           private
        
           def find_user_lesson
                @user_lesson = UserLesson.find(params[:id])
           end
        
           def user_lesson_params
                params.permit(:user_id, :lesson_id, :notes, :completed)
           end
        
end
