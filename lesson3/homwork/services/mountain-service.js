const BaseService = require('./base-service')
const MountainModel = require('../models/mountain')

class MountainService extends BaseService {
  constructor () {
    super(MountainModel, `${__dirname}/../data/mountains.json`)
  }

  getHuts () {
    console.log('------')
    console.log(this.name, 'has these huts:')
    this.huts.forEach(element => console.log(element.name))
  }
}

module.exports = new MountainService()
