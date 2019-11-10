const Mountain = require('./models/mountain')
const Trail = require('./models/trail')
const Hut = require('./models/hut')
const Mountaineer = require('./models/mountaineer')
const Database = require('./services/database')

// create some content. looking forward to learning how to use a database
const kickelhahn = new Mountain('Kickelhahn')
const lindenberg = new Mountain('Lindenberg')
const goethehuette = new Hut('Goethehuette', kickelhahn, 'Mushroom Omelette')
const home = new Hut('Home', kickelhahn, 'Spaghetti')
const boofe = new Hut('Boofe', lindenberg, 'Muesli')
const viewpoint = new Hut('Viewpoint', kickelhahn, 'air & love')
heimweg = new Trail('Heimweg', goethehuette, home, 'bike')
kammweg = new Trail('Kammweg', viewpoint, goethehuette, 'bike')
seTrail = new Trail('SE-Trail', boofe, viewpoint, 'hike')
const kim = new Mountaineer('Kim', boofe, true, true)

// run
// kim.doTour()
kim.showOffTrails()

const MountainDB = []
MountainDB.push(lindenberg)
MountainDB.push(kickelhahn)
console.log(MountainDB)
console.log('save stuff')
Database.save('Mountains.json', MountainDB)
Database.save('goethehuette.json', goethehuette)
Database.save('boofe.json', boofe)
Database.save('home.json', home)
Database.save('kim.json', kim)
