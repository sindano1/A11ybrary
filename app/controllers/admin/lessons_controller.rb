class Admin::LessonsController < AdminController
before_action :find_lesson, only: [:show, :update, :destroy, :edit]
# skip_before_action :authorize, only: [:create, :show, :index]


    def index
        @lessons = Lesson.all
        # render json: Lesson.all
    end

    def show
    end

    def new
        @lesson = Lesson.new
    end

    def create
        @lesson = Lesson.new(lesson_params)
       if @lesson.save!
          redirect_to admin_lesson_path(@lesson.id)
       end
    end

    def edit
    end

    def update
        if @lesson.update!(lesson_params)
            # flash.notice = "Whatever i want"
            redirect_to admin_lesson_path(@lesson.id)
        end
    end

    def destroy
        @lesson.destroy
        head :no_content
    # double check this one -> render json: {}, status :accepted
    end
   

   private

   def find_lesson
        @lesson = Lesson.find(params[:id])
   end

   def lesson_params
        params.require(:lesson).permit(:title, :accessibility_features, :lesson_type, :has_transcript, :transcript, :content)
   end
end
