class CreateSkaterTricks < ActiveRecord::Migration[7.0]
  def change
    create_table :skater_tricks do |t|
      t.string :skater_id
      t.string :integer
      t.integer :trick_id
      t.string :video_link

      t.timestamps
    end
  end
end
