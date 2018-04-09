numberOfFish = 0

function createFishAndBubble(){
    setTimeout(function(){ 
        createFish()
        createBubble()
    }, 250)
}

function createFish(){
    let fish = document.createElement("fish")
    document.body.appendChild(fish)
    let startx = (Math.random() * window.innerWidth)
    let starty = (Math.random() * window.innerHeight)
    let color = Math.random() * 360
    fish.style.left = startx + "px"
    fish.style.top = starty + "px"
    fish.style.webkitFilter = "hue-rotate(" + color + "deg)"
    fish.style.filter = "hue-rotate(" + color + "deg)"

    fish.addEventListener("click", killFish)

    numberOfFish++
    if(numberOfFish < 100) {
        createFishAndBubble()
    }
}

function createBubble(){
    let bubble = document.createElement("bubble")
    document.body.appendChild(bubble)
    let startx = (Math.random() * window.innerWidth)
    bubble.style.left = startx + "px"
    bubble.style.top = "0px"
}


function killFish(e){
    let fish = e.currentTarget
    fish.classList.add("dead")
}



window.addEventListener("load", function () {
    createFishAndBubble()
})
