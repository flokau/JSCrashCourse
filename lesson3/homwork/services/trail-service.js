const BaseService = require('./base-service')
const TrailModel = require('../models/trail')

class TrailService extends BaseService {
  constructor () {
    super(TrailModel, `${__dirname}/../data/trails.json`)
  }
}

module.exports = new TrailService()
