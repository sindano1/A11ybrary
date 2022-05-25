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

            def your_lesson_sandbox
               render json: User.find(session[:user_id]).lessons, include: :codes
            end

            def lesson_sandbox
                user_lesson = User.find(session[:user_id]).user_lessons.find_by(lesson_id: (params[:id]))
                # .includes(user_lessons: [:codes])
                render json: user_lesson
                # .includes(:codes)
                # (:include => [:efforts])
            end

            def update_notes
                user_lesson = User.find(session[:user_id]).user_lessons.find_by(lesson_id: (params[:id]))
                user_lesson.update!(user_lesson_params)
                render json: user_lesson, status: :accepted
            end
            
           
        
           private
        
           def find_user_lesson
                @user_lesson = UserLesson.find(session[:user_id])
           end
        
           def user_lesson_params
                params.permit(:user_id, :lesson_id, :notes, :completed)
           end
        
end
