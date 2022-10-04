# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Seeding..."
Skater.destroy_all

Skater.create!([{
    name: "Yuto Horigome",
    stance: "Goofy", 
    hometown: "Tokyo, Japan",
    profile: "https://skateparkoftampa.com/spot/headshots/6588.jpg",
    full_shot: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSqZxw4DLxqdBjQYbOs0jYkLMghIWMUFZMGwPt_m4v3y1snQLIcN3qkdAqiXsqhrdQxSdtUyF0qSXrqA60"
    },
    {
    name: "Eric Koston",
    stance: "Goofy",
    hometown: "San Bernadino, CA",
    profile: "https://skateparkoftampa.com/spot/headshots/252.jpg",
    full_shot: "https://i.pinimg.com/originals/0d/d9/c0/0dd9c01d112a1c4bf0c4e7914e872ee8.jpg"
    },
    {
    name: "Paul Rodriguez",
    stance: "Goofy",
    hometown: "Los Angeles, CA",
    profile: "https://skateparkoftampa.com/spot/headshots/385.jpg",
    full_shot: "https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY4MTg3MDk4NjY5NTI0MzUy/paul-rodriguez-nike-sb-skateboarding_0jpg.jpg"
    },
    {
    name: "Sean Malto",
    stance: "Regular",
    hometown: "Kansas City, KS",
    profile: "https://skateparkoftampa.com/spot/headshots/961.jpg",
    full_shot: "https://i.pinimg.com/originals/9e/b7/16/9eb716154803dd32610f81e8f57e1ef3.jpg"
    },
    {
    name: "Nyjah Huston",
    stance: "Goofy",
    hometown: "Laguna Beach, CA",
    profile: "https://skateparkoftampa.com/spot/headshots/662.jpg",
    full_shot: "https://img.redbull.com/images/c_crop,x_1929,y_0,h_3455,w_2074/c_fill,w_400,h_540/q_auto:low,f_auto/redbullcom/2016/05/15/1331794876749_1/nyjah-huston-crooks"
    },
    {
    name: "Jaws",
    stance: "Regular",
    hometown: "Phoenix, AZ",
    profile: "https://skateparkoftampa.com/spot/headshots/2459.jpg",
    full_shot: "https://skateboarding.transworld.net/wp-content/uploads/2017/03/aaron-homoki-kickflip.jpg"
    },
    {
    name: "Mason Silva",
    stance: "Regular",
    hometown: "Manhattan Beach, CA",
    profile: "https://skateparkoftampa.com/spot/headshots/4132.jpg",
    full_shot: "https://www.nikesb.com/assets/imager/uploads/9865/nikesb-mason2020-feedcard_46f197f16a21d94fd5b067a988cd2647.jpg"
    },
    ])
puts "Created #{Skater.count} skaters"

Trick.create!([{
    name: "Ollie",
    difficulty: 2
},
{
    name: "BS Shuvit",
    difficulty: 1
},
{
    name: "Boneless",
    difficulty: 2
},
{
    name: "FS Shuvit",
    difficulty: 4
},
{
    name: "Kickflip",
    difficulty: 4
},
{
    name: "Tre flip",
    difficulty: 8
}



])

puts "Seeding done"

