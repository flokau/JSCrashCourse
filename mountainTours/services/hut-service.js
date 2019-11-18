const BaseService = require('./base-service')
const HutModel = require('../models/hut')
const MountainService = require('./mountain-service')

class HutService extends BaseService {
  model = HutModel


  getTrails () {
    this.trails.forEach(element => console.log(element))
  }

  async addToMountain (hut) {
    const mountain = await MountainService.find(hut.mountain)
    mountain.huts.push(hut)
    await mountain.save()
  }
}

module.exports = new HutService()
