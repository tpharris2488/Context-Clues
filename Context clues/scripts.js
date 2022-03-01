
var homie = ['Shane', 'AndreBob', 'Ashley', 'Pete', 'Giorno'];

var loc = ['Fairfield', 'Miami', 'Memphis', 'Biloxi', 'Atlanta', 'Aspen', 'Berlin', 'Paris', 'Jakarta', 'Maranello'];

var weaponry = ['fentanyl slushie', 'dump truck', 'full auto draco', 'hunting knife', 'laser rifle', 'heartbreak', 'poison fish', 'lethal fart', 'desert eagle', 'decapitation', 'push off a balcony','industrial sized meat grinder', 'scythe', 'broadsword', 'c4', 'homemade flamethrower', 'camshaft bludgeoning', 'sawed off shotgun', 'Barrett 50 cal', 'penny dropped off a skyscraper'];

document.addEventListener('DOMContentLoaded', function(){
    for(var i = 1; i < 101; i++){
    console.log(i);
    var heading = document.createElement('h3')
    heading.innerHTML = 'Accusation ' + i;
    var set = {
        num: i,
        homie : homie[Math.floor(Math.random() * homie.length)],
        loc : loc[Math.floor(Math.random() * loc.length)],
        weaponry : weaponry[Math.floor(Math.random() * weaponry.length)]
    
    };
    heading.addEventListener('click', config.bind(set));
    document.body.appendChild(heading);
    }
});
function config() {
    alert(this.homie + ' did it in ' + this.loc + ' with a ' + this.weaponry);
}