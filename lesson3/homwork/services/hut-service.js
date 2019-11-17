const BaseService = require('./base-service')
const HutModel = require('../models/hut')

class HutService extends BaseService {
  constructor () {
    super(HutModel, `${__dirname}/../data/huts.json`)
  }

  getTrails () {
    this.trails.forEach(element => console.log(element))
  }
}

module.exports = new HutService()
