class TricksController < ApplicationController

    def index 
        render json: Trick.all
    end


end
