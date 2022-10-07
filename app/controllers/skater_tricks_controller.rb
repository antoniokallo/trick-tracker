class SkaterTricksController < ApplicationController
    def create
        skatertrick = SkaterTrick.create!(skatertrick_params)
        render json: skatertrick.trick, status: :created
    end

    def index
        
            skatertricks = SkaterTrick.all
            render json: skaters
    
    end

    def destroy
        @skater_trick.destroy
        head :no_content
    end

    def update
        @skater_trick.update!(skatertrick_params)
        render json: @skater_trick, status: :accepted
    end



    private

    def skatertrick_params
    params.permit(:skater_id, :trick_id, :video_link)
    end
end
