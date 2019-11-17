const trailService = require('../services/trail-service')
module.exports = class Trail {
  constructor (name, start, end, style) {
    this.name = name
    this.startHut = start
    this.endHut = end
    this.style = style // hiking (default), bike or climbing
  }

  static create (name, start, end, style) {
    return new Trail(name, start, end, style)
  }
}
