class Skater < ApplicationRecord
    has_many :skater_tricks
    has_many :tricks, through: :skater_tricks

end
