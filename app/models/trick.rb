

class Trick < ApplicationRecord
    has_many :skater_tricks
    has_many :skaters, through: :skater_tricks
end