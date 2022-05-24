class CodesController < ApplicationController
    before_action :find_code, only: [:show, :update, :destroy]
    skip_before_action :authorize, only: [:create, :show, :index]

    def index
        render json: Code.all
    end

    def show
     render json: @code
    end

   def create
    render json: Code.create!(code_params), status: :created
   end

   def update
   #don't forget to add before action
    @find_code.update!(code_params)
   render json: @find_code, status: :accepted
   end

   def destroy
   #don't forget to add before action
    @code.destroy
    head :no_content
   # double check this one -> render json: {}, status :accepted
   end
   

    private

    def find_code
        @code = Code.find(params[:id])
    end

   def code_params
    params.permit(:lesson_id, :language, :accessible_code, :inaccessible_code)
   end
end
