const mongoose = require('mongoose')
const HutSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2
  },
  trails: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Trail',
    autopopulate: {
      maxDepth: 1
    }
  }],
  mountain: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Mountain',
    autopopulate: {
      maxDepth: 1
    }
  },
  meal: String
})

HutSchema.plugin(require('mongoose-autopopulate'))

const HutModel = mongoose.model('Hut', HutSchema)

module.exports = HutModel
