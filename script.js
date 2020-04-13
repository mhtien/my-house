// night time sky 
const sun = document.getElementsByClassName("sun")[0];

function nightMode(event) {
    const hidden = document.body.classList[0];
    const bodyClass = document.body;
    const sunVis = document.getElementsByClassName("sun-vis")[0];
    const moonVis = document.getElementsByClassName("moon-vis")[0];


    if (hidden == undefined) {
        bodyClass.classList.add("hidden");
        sunVis.classList.remove("hide-element");

    } else {
        bodyClass.classList.remove("hidden");
        sunVis.classList.add("hide-element");
    }

}

sun.addEventListener("click", nightMode);


// image carousel
const leftArrow = document.getElementsByClassName("left-arrow")[0];
const rightArrow = document.getElementsByClassName("right-arrow")[0];

const imageOne = document.getElementsByClassName("image-1")[0];
const imageTwo = document.getElementsByClassName("image-2")[0];
const imageThree = document.getElementsByClassName("image-3")[0];
const imageFour = document.getElementsByClassName("image-4")[0];
const imageFive = document.getElementsByClassName("image-5")[0];

const playButton = document.getElementsByClassName("play")[0];
const pauseButton = document.getElementsByClassName("pause")[0];

let slidesArray = [imageOne, imageTwo, imageThree, imageFour, imageFive];
let carouselLength = slidesArray.length;
let i = 0;

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