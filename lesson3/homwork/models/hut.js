// Huts serve some food and also have some signs indicating the available trails via getTrails
module.exports = class Hut {
  constructor (name, mountain, meal) {
    this.name = name
    this.mountain = mountain
    this.meal = meal
    this.trails = []
  }

  static create (name, mountain, meal) {
    return new Hut(name, mountain, meal)
  }
}
