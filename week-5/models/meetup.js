const mongoose = require('mongoose')

const MeetupSchema = mongoose.Schema({
  name: String,
  location: String,
  attendees: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Person',
    autopopulate: {
      maxDepth: 1
    }
  }]
})

const MeetupModel = mongoose.model('Meetup', MeetupSchema)

module.exports = MeetupModel
