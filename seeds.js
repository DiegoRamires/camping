const mongoose   = require("mongoose")
const Campground = require("./models/campground")
const Comment    = require("./models/comment")

const data = [
  {
    name: "Moon Camp",
    image: "https://farm8.staticflickr.com/7381/9705573948_3f342901d1.jpg",
    description: "Pickled typewriter hexagon, ethical dreamcatcher mumblecore wolf. Everyday carry hoodie kale chips tbh wolf lumbersexual occupy blue bottle cold-pressed blog bushwick leggings subway tile paleo. Keffiyeh lomo ennui air plant PBR&B, blue bottle distillery cray polaroid. "
  },
  {
    name: "Mountain Camp",
    image: "https://farm3.staticflickr.com/2582/3820664827_6c2e9a69ae.jpg",
    description: "Pickled typewriter hexagon, ethical dreamcatcher mumblecore wolf. Everyday carry hoodie kale chips tbh wolf lumbersexual occupy blue bottle cold-pressed blog bushwick leggings subway tile paleo. Keffiyeh lomo ennui air plant PBR&B, blue bottle distillery cray polaroid. "
  },
  {
    name: "Blue Camp",
    image: "https://farm8.staticflickr.com/7067/6847303772_1ea8fb63af.jpg",
    description: "Pickled typewriter hexagon, ethical dreamcatcher mumblecore wolf. Everyday carry hoodie kale chips tbh wolf lumbersexual occupy blue bottle cold-pressed blog bushwick leggings subway tile paleo. Keffiyeh lomo ennui air plant PBR&B, blue bottle distillery cray polaroid. "
  }
]

function seedDB() {
  // Remove all campgrounds
  Campground.remove({}, function(err){
    if(err){
      console.log(err)
    }
    console.log("Deleted all campgrounds!")
    // add a few campgrounds
    data.forEach(function(seed){
      Campground.create(seed, function(err, campground){
        if(err){
          console.log(err)
        } else {
          console.log("Added a new campground")
          // create a comment
          Comment.create(
            {
              text: "Trust fund meh activated charcoal, microdosing hashtag echo park chartreu neutra iPhone gentrify vexillologis tilde",
              author: "Hommer"
            }, function(err, comment){
              if(err){
                console.log(err)
              } else {
                campground.comments.push(comment)
                campground.save()
                console.log("Create new comment")
              }
            })
        }
      })
    })
  })
}

module.exports = seedDB
