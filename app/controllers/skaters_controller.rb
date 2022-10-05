class SkatersController < ApplicationController
    def index 
        render json: Skater.all
    end
end
