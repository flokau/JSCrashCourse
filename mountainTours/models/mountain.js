const mongoose = require('mongoose')
const MountainSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2
  },
  huts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hut'
  }]
})

const MountainModel = mongoose.model('Mountain', MountainSchema)

module.exports = MountainModel
