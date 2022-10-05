class CreateTricks < ActiveRecord::Migration[7.0]
  def change
    create_table :tricks do |t|
      t.string :name
<<<<<<< HEAD
=======
      t.integer :difficulty
>>>>>>> 8b4ba63 (merge conflicts resolved)

      t.timestamps
    end
  end
end
