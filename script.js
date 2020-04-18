//  sky transition
const sun = document.getElementsByClassName("sun-moon")[0];

function nightMode(event) {
    const hiddenNight = document.body.classList;
    const bodyClass = document.body;
    const sunVis = document.getElementsByClassName("sun-vis")[0];
    const house = document.getElementsByClassName("house")[0];
    const windowDay = document.getElementsByClassName("window-hover")[0];
    const windowColor = document.getElementsByClassName("window-hover")[0];


    if (hiddenNight != "hide-night") {
        bodyClass.classList.add("hide-night");
        bodyClass.classList.remove("hide-day");
        sunVis.classList.remove("hide-element");
        house.classList.add("house-hover");
    

    } else {
        bodyClass.classList.remove("hide-night");
        bodyClass.classList.add("hide-day");
        sunVis.classList.add("hide-element");
        house.classList.remove("house-hover");
    
    }

}

sun.addEventListener("click", nightMode);


// image carousel
const leftArrow = document.getElementsByClassName("left-arrow")[0];
const rightArrow = document.getElementsByClassName("right-arrow")[0];

const playButton = document.getElementsByClassName("play")[0];
const pauseButton = document.getElementsByClassName("pause")[0];

// getting the child elements of the container
let childrenArray = document.getElementById("carousel-slides").children;

//copy of the child elements for manipulation
let slidesArray = [...childrenArray];

let carouselLength = slidesArray.length;
let i = 0;

// Adding classes initially
slidesArray[i].classList.add("img-active");
slidesArray[i+1].classList.add("img-right");
slidesArray[carouselLength-1].classList.add("img-left");

function slideRight(event) {

    // moves active slide out of frame
    slidesArray[i].classList.add("img-left");
    slidesArray[i].classList.remove("img-active");

    // moves slide into frame
    slidesArray[i + 1].classList.add("img-active");
    slidesArray[i + 1].classList.remove("img-right");

    // lines up next frames
    slidesArray[i + 2].classList.add("img-right");
    slidesArray[i + 2].classList.remove("img-hidden");

    // for all other frames
    slidesArray[i + 3].classList.remove("img-left")
    slidesArray[i + 3].classList.add("img-hidden");
 
    // restarts array order
    slidesArray.push(slidesArray.shift())

}

function slideLeft(event) {

    // moves active slide out of frame
    slidesArray[i].classList.add("img-right");
    slidesArray[i].classList.remove("img-active");

    // moves slide into frame
    slidesArray[carouselLength - 1].classList.add("img-active");
    slidesArray[carouselLength - 1].classList.remove("img-left");

    // lines up next frames
    slidesArray[carouselLength - 2].classList.add("img-left");
    slidesArray[carouselLength - 2].classList.remove("img-hidden");

    // for all other frames
    slidesArray[carouselLength - 3].classList.remove("img-right");
    slidesArray[carouselLength - 3].classList.add("img-hidden");
    
    // restarts array order
    slidesArray.unshift(slidesArray.pop())

}

function playSlides(event) {
    play = setInterval(slideRight, 2000);
    playButton.classList.add("play-hide");
    pauseButton.classList.remove("play-hide");
}


function pauseSlides() {
    clearInterval(play);
    playButton.classList.remove("play-hide");
    pauseButton.classList.add("play-hide");
}

// function for pressing left and right arrow keys
function keyPress(event) {
    if (event.which === 39) {
        return slideRight();
    }
    if (event.which === 37) {
        return slideLeft();
    }
}
// event listener for clicking left and right
rightArrow.addEventListener("click", slideRight);
leftArrow.addEventListener("click", slideLeft);

// event listener for left and right arrow keys
document.addEventListener("keyup", keyPress);

// event listener for clicking play and pause
playButton.addEventListener("click", playSlides);
pauseButton.addEventListener("click", pauseSlides);