//  sky transition
const sun = document.getElementsByClassName("sun-moon")[0];

function nightMode(event) {
    const hiddenNight = document.body.classList;
    const bodyClass = document.body;

    // if statement suggests site is day time
    if (hiddenNight != "hide-night") {
        bodyClass.classList.add("hide-night");
        bodyClass.classList.remove("hide-day");

        // else statement suggests site is night time
    } else {
        bodyClass.classList.remove("hide-night");
        bodyClass.classList.add("hide-day");
    }

}

sun.addEventListener("click", nightMode);


// image carousel
const leftArrow = document.getElementsByClassName("left-arrow")[0];
const rightArrow = document.getElementsByClassName("right-arrow")[0];

const playButton = document.getElementsByClassName("play")[0];
const pauseButton = document.getElementsByClassName("pause")[0];

const imageCarousel = document.getElementById("image-carousel");
const carouselSlides = document.getElementById("carousel-slides");

let carouselLength = carouselSlides.childElementCount;

const carouselDots = document.getElementsByClassName("dots")[0];

if (carouselLength === 1) {
    leftArrow.classList.add("hide-element");
    rightArrow.classList.add("hide-element");
    playButton.classList.add("hide-element");
    pauseButton.classList.add("hide-element");
}

if (carouselLength === 2) {

    // Getting img src

    function cloneImage() {
        for (let i = 0; i < carouselLength; i++) {

            // new image element
            let imageSrc = carouselSlides.children[i].children[0].getAttribute("src");
            let imageAlt = carouselSlides.children[i].children[0].getAttribute("alt");
            let newImg = document.createElement("img");
            newImg.setAttribute("src", imageSrc);
            newImg.setAttribute("alt", imageAlt);

            // new div container with slide attribute
            let newDiv = document.createElement("div");
            newDiv.setAttribute("class", "slide image-clone");

            // appending img to div
            newDiv.appendChild(newImg);

            // appending new div to carousel slides
            carouselSlides.appendChild(newDiv);
        }
    }
    cloneImage();
}


// getting the child elements of the container
let childrenArray = document.getElementById("carousel-slides").children;

//copy of the child elements for manipulation
let slidesArray = [...childrenArray];

carouselLength = slidesArray.length;

// creating dots
function createDots() {
    if (carouselLength > 1) {

        for (let k = 0; k < carouselLength; k++) {

            let newDotImg = document.createElement("img");
            newDotImg.setAttribute("src", "images\\dot.svg");
            newDotImg.setAttribute("alt", "dot");
            carouselDots.appendChild(newDotImg);
        }
    }
}

createDots();


let i = 0;

// Adding classes initially
slidesArray[i].classList.add("img-active");
slidesArray[i + 1].classList.add("img-right");
slidesArray[carouselLength - 1].classList.add("img-left");

// for 3 slides 

if (carouselLength === 3) {

    function slideRight(event) {

        // moves active slide out of frame
        slidesArray[i].classList.add("img-left");
        slidesArray[i].classList.remove("img-active");

        // moves slide into frame
        slidesArray[i + 1].classList.add("img-active");
        slidesArray[i + 1].classList.remove("img-right");
        slidesArray[i + 1].classList.remove("img-index");

        // lines up next frames
        slidesArray[i + 2].classList.add("img-right");
        slidesArray[i + 2].classList.remove("img-left");
        slidesArray[i + 2].classList.add("img-index");

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
        slidesArray[carouselLength - 1].classList.remove("img-index");
        // lines up next frames
        slidesArray[carouselLength - 2].classList.add("img-left");
        slidesArray[carouselLength - 2].classList.remove("img-right");
        slidesArray[carouselLength - 2].classList.add("img-index");

        // restarts array order
        slidesArray.unshift(slidesArray.pop())

    }

}

// for more than 3 slides 

if (carouselLength > 3) {

    // for 4 slides or more
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
        for (let j = 3; j < slidesArray.length; j++) {
            slidesArray[i + j].classList.remove("img-left");
            slidesArray[i + j].classList.add("img-hidden");
        }

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
        for (let j = 3; j < slidesArray.length; j++) {
            slidesArray[carouselLength - j].classList.remove("img-right");
            slidesArray[carouselLength - j].classList.add("img-hidden");
        }
        // restarts array order
        slidesArray.unshift(slidesArray.pop())

    }
}

function playSlides(event) {
    play = setInterval(slideRight, 1500);
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

let d = 0;

// set first dot
carouselDots.children[d].setAttribute("class", "dot-active");

function rightDot() {
    for (let x = 0; x<carouselLength; x++) {
        carouselDots.children[x].removeAttribute("class", "dot-active");
    }
    console.log("first", d);
    if (d >= carouselLength-1) {
        d = 0;
    } else {
        d+=1;
    }
    console.log("second",d);
    console.log(carouselLength);
    carouselDots.children[d].setAttribute("class", "dot-active");
}

function leftDot() {
    for (let x = 0; x<carouselLength; x++) {
        carouselDots.children[x].removeAttribute("class", "dot-active");
    }
    console.log("first", d);
    if (d <= 0) {
        d = carouselLength -1;
    } else {
        d-=1;
    }
    console.log("second",d);
    carouselDots.children[d].setAttribute("class", "dot-active");
}


// dots
rightArrow.addEventListener("click", rightDot);
leftArrow.addEventListener("click", leftDot);