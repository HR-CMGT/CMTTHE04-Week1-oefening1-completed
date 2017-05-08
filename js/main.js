//
// interval om te zorgen dat vissen en bubbles hun animatie op een ander moment starten
//
var numberOfFish = 0;
var maxFish = 60;
var title = document.getElementsByTagName("message")[0];
var button = document.getElementsByTagName("start")[0];

function startGame(){
    title.remove();
    button.remove();
    createFishAndBubble();
}


function createFishAndBubble(){
    setTimeout(function(){ 
        createFish();
        createBubble();
    }, 250);
}

//
// bouw een vis
//
function createFish(){
    var fish = document.createElement("fish");
    document.body.appendChild(fish);
    var startx = (Math.random() * window.innerWidth);
    var starty = (Math.random() * window.innerHeight);
    var color = Math.random() * 360;
    fish.style.left = startx + "px";
    fish.style.top = starty + "px";
    fish.style.webkitFilter = "hue-rotate(" + color + "deg)";
    fish.style.filter = "hue-rotate(" + color + "deg)";

    fish.addEventListener("click", function (evt) {
        killFish(evt);
    });

    // maximum
    numberOfFish++;
    if(numberOfFish < maxFish) {
        createFishAndBubble();
    }
}

function createBubble(){
    var bubble = document.createElement("bubble");
    document.body.appendChild(bubble);
    var startx = (Math.random() * window.innerWidth);
    bubble.style.left = startx + "px";
    bubble.style.top = "0px";
}


function killFish(evt){
    // currenttarget is het element waar de listener aan hangt
    var fish = evt.currentTarget;
    fish.classList.add("dead");
}


//
// start the game on button click
//

button.addEventListener("click", function () {
    startGame();
});

//
// start the game on window load
//
/*
window.addEventListener("load", function () {
    createFishAndBubble();
});
*/