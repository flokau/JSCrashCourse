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
const heimweg = new Trail('Heimweg', goethehuette, home, 'bike')
const kammweg = new Trail('Kammweg', viewpoint, goethehuette, 'bike')
const seTrail = new Trail('SE-Trail', boofe, viewpoint, 'hike')
const kim = new Mountaineer('Kim', boofe, true, true)

// run
// kim.doTour()
kim.showOffTrails()

const MountainDB = []
MountainDB.push(lindenberg)
MountainDB.push(kickelhahn)
const trailDB = []
trailDB.push(heimweg)
trailDB.push(kammweg)
trailDB.push(seTrail)
const mountaineerDB = []
mountaineerDB.push(kim)
const hutDB = []
hutDB.push(goethehuette)
hutDB.push(home)
hutDB.push(boofe)
hutDB.push(viewpoint)
console.log(MountainDB)
console.log('save stuff')
Database.save('mountains.json', MountainDB)
Database.save('trails.json', trailDB)
Database.save('huts.json', hutDB)
Database.save('mountaineers.json', mountaineerDB)
