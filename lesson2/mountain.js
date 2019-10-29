// first we need some mountains to hike.
// they will have as many trails and huts, as we create later on.
// We have our guidebook at hand with getTrails and getHuts
module.exports = class Mountain {
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
