class SkaterTricksController < ApplicationController
    def create
        skatertrick = SkaterTrick.create!(skatertrick_params)
        render json: skatertrick.trick, status: :created
    end


    private

    def skatertrick_params
    params.permit(:skater_id, :trick_id, :video_link)
    end
end
