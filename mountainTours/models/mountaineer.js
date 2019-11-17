const mongoose = require('mongoose')
const MountaineerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2
  },
  location: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hut'
  }],
  bike: Boolean,
  climbing: Boolean,
  log: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Trail'
  }]
})

MountaineerSchema.eat = async function () {
  console.log('------')
  console.log('Eating', this.location.meal)
}

MountaineerSchema.showOffTrails = async function () {
  console.log('------')
  console.log(this.name, 'Has these trails in her all-time trail log:')
  this.log.forEach(element => console.log(element.name))
}

MountaineerSchema.doTrail = async function (trail) {
  console.log('------')
  console.log('Starting the Trail', trail.name, 'at', this.location.name)
  if (trail.style === 'hike') { // i am pretty sure tere is a nicer way to solve this. this looks very repetitive
    if (this.climbing === true) {
      console.log('Hiking time')
    }
  } else if (trail.style === 'bike') {
    if (this.bike === true) {
      console.log('Going by bike')
    } else {
      console.log('hiking the trail')
    }
  } else if (trail.style === 'climbing') {
    if (this.climbing === true) {
      console.log('Climbing!')
    } else {
      console.log('Cannot do that route')
    }
  }
  console.log('Arrived at', trail.endHut)
  this.location = trail.endHut
  this.log.add(trail)
}

const MountaineerModel = mongoose.model('Mountaineer', MountaineerSchema)

module.exports = MountaineerModel
