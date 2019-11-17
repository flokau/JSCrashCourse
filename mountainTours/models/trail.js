const mongoose = require('mongoose')
const TrailSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2
  },
  startHut: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hut'
  }],
  endHut: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hut'
  }]
})

const TrailModel = mongoose.model('Trail', TrailSchema)

module.exports = TrailModel
