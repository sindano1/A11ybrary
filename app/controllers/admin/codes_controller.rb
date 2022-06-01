class Admin::CodesController < AdminController
    before_action :find_code, only: [:show, :update, :destroy, :edit]
    before_action :find_lesson, except: [:destroy]
    # skip_before_action :authorize, only: [:create, :show, :index]

    # def index
    #     @codes = @lesson.codes
    # end

    def show
    end

    def new
        @code = @lesson.codes.build
    end

   def create
    @code = @lesson.codes.build(code_params)
    if @code.save!
        redirect_to admin_lesson_path(@lesson.id)
    end
   end

   def update
    if @code.update!(code_params)
        redirect_to admin_lesson_path(@lesson.id)
    end
   end

   def edit
    @lesson = find_lesson
   end

   def destroy
   #don't forget to add before action
   sdfa
    @code.destroy
    redirect_to admin_lesson_path(@lesson.id)
    # double check this one -> render json: {}, status :accepted
   end
   

    private

    def find_lesson
        @lesson = Lesson.find(params[:lesson_id])
    end

    def find_code
        @code = Code.find(params[:id])
    end

   def code_params
    params.require(:code).permit(:lesson_id, :language, :accessible_code, :inaccessible_code)
   end
end
