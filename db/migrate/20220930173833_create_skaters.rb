class CreateSkaters < ActiveRecord::Migration[7.0]
  def change
    create_table :skaters do |t|
      t.string :name
      t.string :stance
      t.string :sponsor
      t.string :hometown
      t.string :profile
      t.string :full_shot
      t.string :description

      t.timestamps
    end
  end
end
