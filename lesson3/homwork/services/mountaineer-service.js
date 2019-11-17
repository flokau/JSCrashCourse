const BaseService = require('./base-service')
const MountaineerModel = require('../models/mountaineer')

class MountaineerService extends BaseService {
  constructor () {
    super(MountaineerModel, `${__dirname}/../data/mountaineers.json`)
  }

  doTour (mountaineer) {
    console.log(mountaineer.name, 'is at', mountaineer.location.name, 'on the mountain', mountaineer.location.mountain, 'and starting the tour')
    while (mountaineer.location.name !== 'Home') { // this will end up in an infinite loop if the content isn't created accordingly... to be improved
      this.getTrails()
      mountaineer.eat()
      console.log('chosing', mountaineer.location.trails[0].name)
      mountaineer.doTrail(mountaineer.location.trails[0])
    }
    console.log('Finally arived home. That was quite a Tour!')
  }

  getTrails () {
    console.log('------')
    console.log(this.name, 'is currently at', this.location, 'where the following trails start:')
    // find hut with name this.location and pass the according hut
    this.location.trails.forEach(element => console.log(element.name))
  }
}

module.exports = new MountaineerService()
