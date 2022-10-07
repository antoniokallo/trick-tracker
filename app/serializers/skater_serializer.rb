class SkaterSerializer < ActiveModel::Serializer
  attributes :id, :name, :stance, :sponsor, :hometown, :profile, :full_shot, :add_skater_tricks, :add_tricks, :description
end
