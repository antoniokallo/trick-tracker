class TricksController < ApplicationController


    def index 
        render json: Trick.all
    end


    def create
        trick = Trick.create!(trick_params)
        render json: trick, status: :created
    end 

    private

    def trick_params
        params.permit(:name)
    end

end
