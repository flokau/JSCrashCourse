const BaseService = require('./base-service')
const TrailModel = require('../models/trail')

class TrailService extends BaseService {
    model = TrailModel

async initTrail (startHut, endHut) {
    this.startHut = startHut
    startHut.trails.push(this)
    this.endHut = endHut
    endHut.trails.push(this)
    await this.save()
    await trail.save()
    }
}

module.exports = new TrailService()
