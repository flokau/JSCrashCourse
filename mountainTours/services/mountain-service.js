const BaseService = require('./base-service')
const MountainModel = require('../models/mountain')

class MountainService extends BaseService {
    model = MountainModel

  getHuts () {
    console.log('------')
    console.log(this.name, 'has these huts:')
    this.huts.forEach(element => console.log(element.name))
  }
}

module.exports = new MountainService()
