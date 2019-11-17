const mongoose = require('mongoose')
const HutSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2
  },
  trails: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Trail'
  }],
  mountain: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Mountain'
  },
  meal: String
})

const HutModel = mongoose.model('Hut', HutSchema)

module.exports = HutModel
