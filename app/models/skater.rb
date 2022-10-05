class Skater < ApplicationRecord
    has_many :skater_tricks
    has_many :tricks, through: :skater_tricks


    def add_skater_tricks
        self.skater_tricks
    end
end
