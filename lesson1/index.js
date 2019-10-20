// first we need some mountains to hike.
// they will have as many trails and huts, as we create later on.
// We have our guidebook at hand with getTrails and getHuts
class Mountain {
  constructor (name) {
    this.name = name
    this.trails = []
    this.huts = []
  }

  getTrails () {
    console.log('------')
    console.log(this.name, 'has these trails:')
    this.trails.forEach(element => console.log(element.name))
  }

  getHuts () {
    console.log('------')
    console.log(this.name, 'has these huts:')
    this.huts.forEach(element => console.log(element.name))
  }
}
// then adding trails
class Trail {
  constructor (name, start, end, style) {
    this.name = name
    this.startHut = start
    start.trails.push(this) // adding the trail to the start hut
    start.mountain.trails.push(this) // adding the trail to the mountain of the start hut
    this.endHut = end
    end.trails.push(this) // adding the trail to the end hut
    end.mountain.trails.push(this) // adding the trail to the mountain of the end hut
    this.style = style // hiking (default), bike or climbing
  }
}
// Huts serve some food and also have some signs indicating the available trails via getTrails
class Hut {
  constructor (name, mountain, meal) {
    this.name = name
    this.mountain = mountain
    mountain.huts.push(this) // adding hut to its mountain
    this.meal = meal
    this.trails = []
  }

  getTrails () {
    this.trails.forEach(element => console.log(element.name))
  }
}

class Mountaineer {
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
    console.log('Arrived at', trail.endHut.name)
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
}

function doTour (mountaineer) {
  console.log(mountaineer.name, 'is at', mountaineer.location.name, 'on the mountain', mountaineer.location.mountain.name, 'and starting the tour')
  while (mountaineer.location.name !== 'Home') { // this will end up in an infinite loop if the content isn't created accordingly... to be improved
    mountaineer.getTrails()
    mountaineer.eat()
    console.log('chosing', mountaineer.location.trails[0].name)
    mountaineer.doTrail(mountaineer.location.trails[0])
  }
  console.log('>>>> Finally arived home. That was quite a Tour!  <<<<')
}

// create some content. looking forward to learning how to use a database
const kickelhahn = new Mountain('Kickelhahn')
const lindenberg = new Mountain('Lindenberg')
const goethehuette = new Hut('Goethehuette', kickelhahn, 'Mushroom Omelette')
const home = new Hut('Home', kickelhahn, 'Spaghetti')
const boofe = new Hut('Boofe', lindenberg, 'Muesli')
const viewpoint = new Hut('Viewpoint', kickelhahn, 'air & love')
const heimweg = new Trail('Heimweg', goethehuette, home, 'bike')
const letkammweg = new Trail('Kammweg', viewpoint, goethehuette, 'bike')
const seTrail = new Trail('SE-Trail', boofe, viewpoint, 'hike')
const kim = new Mountaineer('Kim', boofe, true, true)

// run
doTour(kim)
kim.showOffTrails()
