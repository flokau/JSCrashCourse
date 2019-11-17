const BaseService = require('./base-service')
const TrailModel = require('../models/trail')

class TrailService extends BaseService {
    model = TrailModel
}

module.exports = new TrailService()
