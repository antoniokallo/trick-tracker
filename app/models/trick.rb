

class Trick < ApplicationRecord
    has_many :skater_tricks
    has_many :skaters, through: :skater_tricks
<<<<<<< HEAD
end
=======
end
>>>>>>> 7003051 (onclick render)
