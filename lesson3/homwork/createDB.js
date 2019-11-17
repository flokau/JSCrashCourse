const Mountain = require('./models/mountain')
const Trail = require('./models/trail')
const Hut = require('./models/hut')
const Mountaineer = require('./models/mountaineer')
const Database = require('./services/database')
// create some content. looking forward to learning how to use a database
// Mountains
const kickelhahn = Mountain.create('Kickelhahn')
const lindenberg = Mountain.create('Lindenberg')
const mountainDB = []
mountainDB.push(lindenberg)
mountainDB.push(kickelhahn)
// Huts
const goethehuette = Hut.create('Goethehuette', kickelhahn, 'Mushroom Omelette')
const home = Hut.create('Home', kickelhahn, 'Spaghetti')
const boofe = Hut.create('Boofe', lindenberg, 'Muesli')
const viewpoint = Hut.create('Viewpoint', kickelhahn, 'air & love')
const hutDB = []
hutDB.push(goethehuette)
hutDB.push(home)
hutDB.push(boofe)
hutDB.push(viewpoint)
// Trails
const heimweg = Trail.create('Heimweg', goethehuette, home, 'bike')
const kammweg = Trail.create('Kammweg', viewpoint, goethehuette, 'bike')
const seTrail = Trail.create('SE-Trail', boofe, viewpoint, 'hike')
const trailDB = []
trailDB.push(heimweg)
trailDB.push(kammweg)
trailDB.push(seTrail)
// Mountaineers
const kim = Mountaineer.create('Kim', boofe, true, true)
const mountaineerDB = []
mountaineerDB.push(kim)

// save files
Database.save('mountaineers.json', mountaineerDB)
Database.save('mountains.json', mountainDB)
Database.save('trails.json', trailDB)
Database.save('huts.json', hutDB)
