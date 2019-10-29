// then adding trails
module.exports = class Trail {
  constructor (name, start, end, style) {
    this.name = name
    this.startHut = start
    start.trails.push(this) // adding the trail to the start hut
    start.mountain.trails.push(this) // adding the trail to the mountain of the start hut
    this.endHut = end
    end.trails.push(this) // adding the trail to the end hut
    end.mountain.trails.push(this) // adding the trail to the mountain of the end hut
    this.style = style // hiking (default), bike or climbing
  }
}
