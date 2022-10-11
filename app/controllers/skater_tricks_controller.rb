class SkaterTricksController < ApplicationController
    def create
        skatertrick = SkaterTrick.create!(skatertrick_params)
        render json: skatertrick, status: :created
    end

    def destroy
        skatertrick = SkaterTrick.find_by!(params[:id])
        skatertrick.destroy
        head :no_content
    end

    def update
        skatertrick = SkaterTrick.find_by!(params[:id])
        skatertrick.update(skatertrick_params)
        render json: skatertrick, status: :accepted
        
    end

    def index
        skatertricks = SkaterTrick.all
        render json: skatertricks
    end
    def show 
        skatertrick = SkaterTrick.find(params[:id])
        render json: skatertrick
    end



    private

    def skatertrick_params
    params.permit(:video_link)
    end
end
