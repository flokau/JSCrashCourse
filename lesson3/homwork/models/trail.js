// then adding trails
module.exports = class Trail {
  constructor (name, start, end, style) {
    this.name = name
    this.startHut = start.name
    start.trails.push(this) // adding the trail to the start hut
    this.endHut = end.name
    end.trails.push(this) // adding the trail to the end hut
    this.style = style // hiking (default), bike or climbing
  }
}
