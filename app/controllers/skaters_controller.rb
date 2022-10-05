class SkatersController < ApplicationController
    def index
        skaters = Skater.all
        render json: skaters
    end
    def show 
        skater = Skater.find(params[:id])
        render json: skater
    end
    def create
        skater = Skater.create!(skater_params)
        render json: skater, status: :created
    end
    def update
        skater = Skater.find(params[:id])
        skater.update!(skater_params)
        render json: skater, status: :accepted
    end
    def destroy
        skater = Skater.find(params[:id])
        skater.destroy
        head :no_content
    end


    private
    def skater_params
        params.permit(:name, :stance, :hometown, :profile, :full_shot)

    end
end
