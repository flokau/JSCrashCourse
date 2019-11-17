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
const goethehuette = Hut.create('Goethehuette', 'Kickelhahn', 'Mushroom Omelette')
kickelhahn.huts.push(goethehuette.name)
const home = Hut.create('Home', 'Kickelhahn', 'Spaghetti')
kickelhahn.huts.push(home.name)
const boofe = Hut.create('Boofe', 'Lindenberg', 'Muesli')
lindenberg.huts.push(boofe.name)
const viewpoint = Hut.create('Viewpoint', 'Kickelhahn', 'air & love')
kickelhahn.huts.push(viewpoint.name)
const hutDB = []
hutDB.push(goethehuette)
hutDB.push(home)
hutDB.push(boofe)
hutDB.push(viewpoint)
// Trails
const heimweg = Trail.create('Heimweg', 'Goethehuette', 'Home', 'bike')
goethehuette.trails.push(heimweg.name)
home.trails.push(heimweg.name)
const kammweg = Trail.create('Kammweg', 'Viewpoint', 'Goethehuette', 'bike')
viewpoint.trails.push(kammweg.name)
goethehuette.trails.push(kammweg.name)
const seTrail = Trail.create('SE-Trail', 'Boofe', 'Viewpoint', 'hike')
boofe.trails.push(seTrail.name)
viewpoint.trails.push(seTrail.name)
const trailDB = []
trailDB.push(heimweg)
trailDB.push(kammweg)
trailDB.push(seTrail)
// Mountaineers
const kim = Mountaineer.create('Kim', 'Boofe', true, true)
const mountaineerDB = []
mountaineerDB.push(kim)

// save files
Database.save('./data/mountaineers.json', mountaineerDB)
Database.save('./data/mountains.json', mountainDB)
Database.save('./data/trails.json', trailDB)
Database.save('./data/huts.json', hutDB)
