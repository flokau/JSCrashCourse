const Mountain = require('./mountain')
const Trail = require('./trail')
const Hut = require('./hut')
const Mountaineer = require('./mountaineer')
const Chalk = require('chalk')
const Database = require('./database')

function doTour (mountaineer) {
  console.log(Chalk.black.bgCyan(mountaineer.name, 'is at', mountaineer.location.name, 'on the mountain', mountaineer.location.mountain.name, 'and starting the tour'))
  while (mountaineer.location.name !== 'Home') { // this will end up in an infinite loop if the content isn't created accordingly... to be improved
    mountaineer.getTrails()
    mountaineer.eat()
    console.log('chosing', mountaineer.location.trails[0].name)
    mountaineer.doTrail(mountaineer.location.trails[0])
  }
  console.log(Chalk.black.bgCyan('Finally arived home. That was quite a Tour!'))
}

// create some content. looking forward to learning how to use a database
const kickelhahn = new Mountain('Kickelhahn')
const lindenberg = new Mountain('Lindenberg')
const goethehuette = new Hut('Goethehuette', kickelhahn, 'Mushroom Omelette')
const home = new Hut('Home', kickelhahn, 'Spaghetti')
const boofe = new Hut('Boofe', lindenberg, 'Muesli')
const viewpoint = new Hut('Viewpoint', kickelhahn, 'air & love')
kickelhahn.trails.push(new Trail('Heimweg', goethehuette, home, 'bike'))
kickelhahn.trails.push(new Trail('Kammweg', viewpoint, goethehuette, 'bike'))
lindenberg.trails.push(new Trail('SE-Trail', boofe, viewpoint, 'hike'))
const kim = new Mountaineer('Kim', boofe, true, true)
// run
doTour(kim)
kim.showOffTrails()

Database.save('lindenberg.json', lindenberg)
Database.save('kickelhahn.json', kickelhahn)
Database.save('goethehuette.json', goethehuette)
Database.save('boofe.json', boofe)
Database.save('home.json', home)
Database.save('kim.json', kim)
