# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_09_30_174049) do
  create_table "skater_tricks", force: :cascade do |t|
    t.integer "skater_id"
    t.integer "trick_id"
    t.string "video_link"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "skaters", force: :cascade do |t|
    t.string "name"
    t.string "stance"
    t.string "sponsor"
    t.string "hometown"
    t.string "profile"
    t.string "full_shot"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tricks", force: :cascade do |t|
    t.string "name"
    t.string "difficulty"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
