class SkaterTrickSerializer < ActiveModel::Serializer
  attributes :id, :skater_id, :trick_id, :video_link
end
