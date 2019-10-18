
Record = class {
    constructor(artists,title,tracks){
        this.artists = artists
        this.title = title
        this.tracks = []
    }
    playback = trackNo => console.log('Now playing',trackNo.title)
}

Track = class {
    constructor (artist,title,length){
        this.artist = artist
        this.title = title
        this.length = length
    }
}




create some records
create some tracks
