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

TrailSchema.methods.initTrail = async function (startHut, endHut) {
  this.startHut = startHut
  startHut.trails.push(this)
  this.endHut = endHut
  endHut.trails.push(this)
  await this.save()
  await startHut.save()
  await endHut.save()
}

TrailSchema.plugin(require('mongoose-autopopulate'))

const TrailModel = mongoose.model('Trail', TrailSchema)

module.exports = TrailModel
