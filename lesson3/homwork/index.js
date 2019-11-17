const MountainService = require('./services/mountain-service')
const TrailService = require('./services/trail-service')
const HutService = require('./services/hut-service')
const MountaineerService = require('./services/mountaineer-service')

async function main () {
  const mountains = await MountainService.findAll()
  // console.log(mountains)
  const trails = await TrailService.findAll()
  const huts = await HutService.findAll()
  // console.log(huts)
  const mountaineers = await MountaineerService.findAll()
  // console.log(mountaineers)

  // run
  const mountaineer = mountaineers[0]
  console.log(mountaineer)
  MountaineerService.doTour(mountaineer)
  // kim.showOffTrails()

  // console.log(MountaineerService.find(1))
}

main()
