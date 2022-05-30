class Admin::LessonsController < AdminController
before_action :find_lesson, only: [:show, :update, :destroy]
# skip_before_action :authorize, only: [:create, :show, :index]


    def index
        @lessons = Lesson.all
        # render json: Lesson.all
    end

    def show
        render json: @lesson
    end

    def new
        @lesson = Lesson.new
    end

    def create
        lesson = Lesson.create!(lesson_params)
        render json: lesson, status: :created
    end

    def edit
    end

    def update
        @lesson.update!(lesson_params)
        render json: @lesson, status: :accepted
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
        params.permit(:title, :accessibility_features, :lesson_type, :has_transcript, :transcript, :content)
   end
end
