const mongoose = require('mongoose')
const MountainSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2
  },
  huts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hut',
    autopopulate: {
      maxDepth: 1
    }
  }]
})

MountainSchema.plugin(require('mongoose-autopopulate'))

const MountainModel = mongoose.model('Mountain', MountainSchema)

module.exports = MountainModel
