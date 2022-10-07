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
    full_shot: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSqZxw4DLxqdBjQYbOs0jYkLMghIWMUFZMGwPt_m4v3y1snQLIcN3qkdAqiXsqhrdQxSdtUyF0qSXrqA60",
    description: "Yuto Horigome is a Japanese professional skateboarder. He won the gold medal in the inaugural Olympic men's street event at the 2020 Summer Olympics, becoming the first person ever to win a gold medal in skateboarding at the Olympics."
    },
    {
    name: "Eric Koston",
    stance: "Goofy",
    hometown: "San Bernadino, CA",
    profile: "https://skateparkoftampa.com/spot/headshots/252.jpg",
    full_shot: "https://i.pinimg.com/originals/0d/d9/c0/0dd9c01d112a1c4bf0c4e7914e872ee8.jpg",
    description: "Eric Koston is an American professional skateboarder and company owner. He has been featured in the Tony Hawk's video game series and the Electronic Arts video games Skate 2 and Skate 3. Koston co-owns both Fourstar Clothing and the skatepark/website The Berrics"
    },
    {
    name: "Paul Rodriguez",
    stance: "Goofy",
    hometown: "Los Angeles, CA",
    profile: "https://skateparkoftampa.com/spot/headshots/385.jpg",
    full_shot: "https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY4MTg3MDk4NjY5NTI0MzUy/paul-rodriguez-nike-sb-skateboarding_0jpg.jpg",
    description: "Paul Martin Rodriguez Jr., also known by his nickname P-Rod, is an American professional street skateboarder, actor, rapper, and recording artist. Rodriguez has won a total of eight medals at the X Games, four of them gold"
    },
    {
    name: "Sean Malto",
    stance: "Regular",
    hometown: "Kansas City, KS",
    profile: "https://skateparkoftampa.com/spot/headshots/961.jpg",
    full_shot: "https://i.pinimg.com/originals/9e/b7/16/9eb716154803dd32610f81e8f57e1ef3.jpg",
    description: "Sean Malto, born September the 9th 1989 is a professional skateboarder from Kansas City, MO USA.

    Sean started skateboarding at the young age of 10 and quickly progressed. His first deck sponsor, GIRL Skateboards, was a dream come true and kicked off his career. He has won awards such as Rookie of the Year in 2009 for Transworld Skateboarding Magazine."
    },
    {
    name: "Nyjah Huston",
    stance: "Goofy",
    hometown: "Laguna Beach, CA",
    profile: "https://skateparkoftampa.com/spot/headshots/662.jpg",
    full_shot: "https://img.redbull.com/images/c_crop,x_1929,y_0,h_3455,w_2074/c_fill,w_400,h_540/q_auto:low,f_auto/redbullcom/2016/05/15/1331794876749_1/nyjah-huston-crooks",
    description: "Nyjah Imani Huston is an American professional skateboarder and was the overall champion at competition series in 2010, 2012, 2014, 2017, and 2019. He is the highest paid skateboarder in the world."
    },
    {
    name: "Jaws",
    stance: "Regular",
    hometown: "Phoenix, AZ",
    profile: "https://skateparkoftampa.com/spot/headshots/2459.jpg",
    full_shot: "https://skateboarding.transworld.net/wp-content/uploads/2017/03/aaron-homoki-kickflip.jpg",
    description: "Aaron Homoki, also known as Jaws, is an American professional skateboarder and was featured in the True Blue Retrospect video part. He is from Phoenix, Arizona. He is famous for his ability to withstand big drops and to clear large gaps"
    },
    {
    name: "Mason Silva",
    stance: "Regular",
    hometown: "Manhattan Beach, CA",
    profile: "https://skateparkoftampa.com/spot/headshots/4132.jpg",
    full_shot: "https://www.nikesb.com/assets/imager/uploads/9865/nikesb-mason2020-feedcard_46f197f16a21d94fd5b067a988cd2647.jpg",
    description: "Mason Silva is an 18-year old Am from California who has been skating since he was 3. He's been featured in a few videos (including one with Thunder Trucks and one with KR3W in 2015). His older brother, Dayton, is a pro surfer."
    },
    ])
puts "Created #{Skater.count} skaters"

Trick.create!([
{
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
    name: "FS Shuv nosegrind",
    difficulty: 10
},
{
    name: "Kickflip",
    difficulty: 4
},
{
    name: "Tre flip",
    difficulty: 8
},
{
    name: "Nollie Lateflip",
    difficulty: 8
},
{
    name: "FS pop shuv, Late backfoot hardflip",
    difficulty: 10
},
{
    name: "Gnarly slam",
    difficulty: 10
},
{
    name: "Ender",
    difficulty: 10
}




])

SkaterTrick.create!([
{
    skater_id: Skater.find_by(name: 'Paul Rodriguez').id,
    trick_id: Trick.find_by(name: 'Nollie Lateflip').id,
    video_link: "https://www.youtube.com/embed/qe9YQzonGrk"
},
{
    skater_id: Skater.find_by(name: 'Yuto Horigome').id,
    trick_id: Trick.find_by(name: 'Ollie').id,
    video_link: "https://www.youtube.com/embed/kJCAP7I-EAE?start=71"
},
{
    skater_id: Skater.find_by(name: 'Yuto Horigome').id,
    trick_id: Trick.find_by(name: 'Kickflip').id,
    video_link: "https://www.youtube.com/embed/kFZkUwgbIW4"
},
{
    skater_id: Skater.find_by(name: 'Eric Koston').id,
    trick_id: Trick.find_by(name: 'Tre flip').id,
    video_link: "https://www.youtube.com/embed/_cK4P6LhNHE"
},
{
    skater_id: Skater.find_by(name: 'Sean Malto').id,
    trick_id: Trick.find_by(name: 'FS pop shuv, Late backfoot hardflip').id,
    video_link: "https://www.youtube.com/embed/dMpy9IpDrDA"
},
{
    skater_id: Skater.find_by(name: 'Mason Silva').id,
    trick_id: Trick.find_by(name: 'Ollie').id,
    video_link: "https://www.youtube.com/embed/jVU9ipxtI_Q?start=321"
},
{
    skater_id: Skater.find_by(name: 'Jaws').id,
    trick_id: Trick.find_by(name: 'Ollie').id,
    video_link: "https://www.youtube.com/embed/T32jnYbCaP0?start=15"
},
{
    skater_id: Skater.find_by(name: 'Nyjah Huston').id,
    trick_id: Trick.find_by(name: 'FS Shuv nosegrind').id,
    video_link: "https://www.youtube.com/embed/fqe0Gf77gfs"
},
{
    skater_id: Skater.find_by(name: 'Jaws').id,
    trick_id: Trick.find_by(name: "Kickflip").id,
    video_link: "https://www.youtube.com/embed/JiE35KJ2Rj8?start=25"
},

{
    skater_id: Skater.find_by(name: 'Jaws').id,
    trick_id: Trick.find_by(name: "Gnarly slam").id,
    video_link: "https://www.youtube.com/embed/4GFIXrybfKg?start=5"
},
{
    skater_id: Skater.find_by(name: 'Nyjah Huston').id,
    trick_id: Trick.find_by(name: "Gnarly slam").id,
    video_link: "https://www.youtube.com/embed/uzG_-PYZT-4?start=50"
},
{
    skater_id: Skater.find_by(name: 'Sean Malto').id,
    trick_id: Trick.find_by(name: "Gnarly slam").id,
    video_link: "https://www.youtube.com/embed/G3ee60P1zIk?start=36"
},
{
    skater_id: Skater.find_by(name: 'Eric Koston').id,
    trick_id: Trick.find_by(name: "Gnarly slam").id,
    video_link: "https://www.youtube.com/embed/VZwIsmI6b00?start=36"
},
{
    skater_id: Skater.find_by(name: 'Yuto Horigome').id,
    trick_id: Trick.find_by(name: "Ender").id,
    video_link: "https://www.youtube.com/embed/hqyTRfVtQyw?start=138"
},
{
    skater_id: Skater.find_by(name: 'Mason Silva').id,
    trick_id: Trick.find_by(name: "Gnarly slam").id,
    video_link: "https://www.youtube.com/embed/7ZxlCVTPNng?start=192"
},
{
    skater_id: Skater.find_by(name: 'Mason Silva').id,
    trick_id: Trick.find_by(name: "Ender").id,
    video_link: "https://www.youtube.com/embed/7ZxlCVTPNng?start=321"
}


])

puts "Seeding done"

