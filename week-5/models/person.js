const mongoose = require('mongoose')

const PersonSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2
  },
  age: {
    type: Number,
    required: true,
    min: 18
  },
  meetups: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Meetup',
    autopopulate: {
      maxDepth: 1
    }
  }]
})

PersonSchema.methods.attend = async function (meetup) {
  this.meetups.push(meetup)
  meetup.attendees.push(this)
  await this.save()
  await meetup.save()
}

PersonSchema.methods.findPeersOver18 = async function () {
  return 'hello'
}

PersonSchema.plugin(require('mongoose-autopopulate'))

const PersonModel = mongoose.model('Person', PersonSchema)

module.exports = PersonModel
