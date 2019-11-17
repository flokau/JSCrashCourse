// first we need some mountains to hike.
// they will have as many trails and huts, as we create later on.
// We have our guidebook at hand with getTrails and getHuts
module.exports = class Mountain {
  constructor (name) {
    this.name = name
    this.huts = []
  }

  static create (name) {
    return new Mountain(name)
  }
}
