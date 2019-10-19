//first we need some mountains to hike. they will have as many trails and huts, as we create later on. We have our guidebook at hand with getTrails and getHuts
Mountain = class {
    constructor(name){
        this.name = name
        this.trails = []
        this.huts = []
    }
    getTrails(){
        console.log(this.name,'has these trails:')
        this.trails.forEach(element => console.log(element.name));
        console.log('------')
    }
    getHuts(){
        console.log(this.name,'has these huts:')
        this.huts.forEach(element => console.log(element.name));
        console.log('------')
    }
}
//then adding trails. I initially thought about them being compatible only for hiking,biking,climbing but that got too complex. maybe continuing on it later
Trail = class {
    constructor(name,start,end,maxCompatibility){
        this.name = name
        this.startHut = start
        start.trails.push(this) //adding the trail to the start hut
        start.mountain.trails.push(this) //adding the trail to the mountain of the start hut
        this.endHut = end
        end.trails.push(this) //adding the trail to the end hut
        end.mountain.trails.push(this) //adding the trail to the mountain of the end hut
        this.maxCompatibility = maxCompatibility //to be implemented properly...
    }
}
//Huts serve some food and also have some signs indicating the available trails via getTrails
Hut = class{
    constructor(name,mountain,meal){
        this.name = name
        this.mountain = mountain
        mountain.huts.push(this) //adding hut to its mountain
        this.meal = meal
        this.trails =[]
    }
    getTrails(){
        console.log(this.name,'has these trails:');
        this.trails.forEach(element => console.log(element.name));
        console.log('------');
    }
}

Mountaineer = class{
    constructor(name,location,ability){
        this.name = name
        this.location = location
        this.ability = ability
    }
    doTrail(trail){
        console.log('Starting the Trail',trail.name,'at',this.location.name);
        console.log('doing trail');
        console.log('Arrived at',trail.endHut.name);
        console.log('------')
        this.location = trail.endHut
    }
    eat(){
        console.log('Eating',this.location.meal);
        console.log('------')
    }
    getTrails(){
        console.log(this.name,'is currently at',this.location.name,'where the following trails start:')
        this.location.trails.forEach(element => console.log(element.name));
        console.log('------')
    }
}

function doTour(mountaineer){
    while (mountaineer.location.name != 'Home'){ //okay I cheated on this one and used knowledge from former courses; this will end up in an infinite loop if the content isn't created accordingly... to be improved
        console.log(mountaineer.name,'is currently at',mountaineer.location.name);
        mountaineer.location.getTrails();
        mountaineer.eat();
        console.log('chosing',mountaineer.location.trails[0].name)
        mountaineer.doTrail(mountaineer.location.trails[0])
    }
    console.log('Finally arived home. That was quite a Tour!')
}

//create some content
kickelhahn = new Mountain('Kickelhahn')
elbi = new Mountain('Elbsandstein')
goethehuette = new Hut('Goethehuette',kickelhahn,'Mushroom Omelette')
home = new Hut('Home',kickelhahn,'Spaghetti')
boofe = new Hut('Boofe',elbi,'Muesli')
viewpoint = new Hut('Viewpoint',kickelhahn,'air & love')
heimweg = new Trail('Heimweg',goethehuette,home,'Bike')
kammweg = new Trail('Kammweg',viewpoint,goethehuette,'Bike')
seTrail = new Trail('SW-Trail',boofe,viewpoint,'Hike')
kim = new Mountaineer('Kim',boofe,'Bike')

//run
doTour(kim)