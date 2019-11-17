const mongoose = require('mongoose')
const TrailSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2
  },
  startHut: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hut',
    autopopulate: {
      maxDepth: 1
    }
  }],
  endHut: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hut',
    autopopulate: {
      maxDepth: 1
    }
  }]
})

TrailSchema.plugin(require('mongoose-autopopulate'))

const TrailModel = mongoose.model('Trail', TrailSchema)

module.exports = TrailModel
