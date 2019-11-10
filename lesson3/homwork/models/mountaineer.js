module.exports = class Mountaineer {
  constructor (name, location, bike, climbing) {
    this.name = name
    this.location = location
    this.bike = Boolean(bike)
    this.climbing = Boolean(climbing)
    this.log = new Set([])
  }

  doTrail (trail) {
    console.log('------')
    console.log('Starting the Trail', trail.name, 'at', this.location.name)
    if (trail.style === 'hike') { // i am pretty sure tere is a nicer way to solve this. this looks very repetitive
      if (this.climbing === true) {
        console.log('Hiking time')
      }
    } else if (trail.style === 'bike') {
      if (this.bike === true) {
        console.log('Going by bike')
      } else {
        console.log('hiking the trail')
      }
    } else if (trail.style === 'climbing') {
      if (this.climbing === true) {
        console.log('Climbing!')
      } else {
        console.log('Cannot do that route')
      }
    }
    console.log('Arrived at', trail.endHut)
    this.location = trail.endHut
    this.log.add(trail)
  }

  eat () {
    console.log('------')
    console.log('Eating', this.location.meal)
  }

  getTrails () {
    console.log('------')
    console.log(this.name, 'is currently at', this.location.name, 'where the following trails start:')
    this.location.trails.forEach(element => console.log(element.name))
  }

  showOffTrails () {
    console.log('------')
    console.log(this.name, 'Has these trails in her all-time trail log:')
    this.log.forEach(element => console.log(element.name))
  }

  doTour () {
    console.log(this.name, 'is at', this.location.name, 'on the mountain', this.location.mountain.name, 'and starting the tour')
    while (this.location.name !== 'Home') { // this will end up in an infinite loop if the content isn't created accordingly... to be improved
      this.getTrails()
      this.eat()
      console.log('chosing', this.location.trails[0].name)
      this.doTrail(this.location.trails[0])
    }
    console.log('Finally arived home. That was quite a Tour!')
  }
}
