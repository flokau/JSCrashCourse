const BaseService = require('./base-service')
const HutModel = require('../models/hut')

class HutService extends BaseService {
  model = HutModel


  getTrails () {
    this.trails.forEach(element => console.log(element))
  }
}

module.exports = new HutService()
