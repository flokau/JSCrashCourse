const BaseService = require('./base-service')
const HutService = require('../services/hut-service')
const TrailModel = require('../models/trail')

class TrailService extends BaseService {
    model = TrailModel

    async connectTrail (trail) {
        const start = await HutService.find(trail.startHut)
        start.trails.push(trail)
        const end = await HutService.find(trail.endHut)
        end.trails.push(trail)
        await start.save()
        await end.save()
        await trail.save()
  }
}

module.exports = new TrailService()
