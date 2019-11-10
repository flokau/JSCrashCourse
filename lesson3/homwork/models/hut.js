// Huts serve some food and also have some signs indicating the available trails via getTrails
module.exports = class Hut {
  constructor (name, mountain, meal) {
    this.name = name
    this.mountain = mountain.name
    mountain.huts.push(this) // adding hut to its mountain
    this.meal = meal
    this.trails = []
  }

  getTrails () {
    this.trails.forEach(element => console.log(element))
  }
}
