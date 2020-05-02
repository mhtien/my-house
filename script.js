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
// Event listener for clicking sun or moon
sun.addEventListener("click", nightMode);


// image carousel variables
const leftArrow = document.getElementsByClassName("left-arrow")[0];
const rightArrow = document.getElementsByClassName("right-arrow")[0];

const playButton = document.getElementsByClassName("play")[0];
const pauseButton = document.getElementsByClassName("pause")[0];

const imageCarousel = document.getElementById("image-carousel");
const carouselSlides = document.getElementById("carousel-slides");

const carouselDots = document.getElementsByClassName("dots")[0];

// initial length of carousel - required for  the two slide option
let carouselLength = carouselSlides.childElementCount;
// variable to determin if the slides count was originally two
let twoDots = false;


// if there is only 1 slide, the buttons are hidden
if (carouselLength === 1) {
    leftArrow.classList.add("hide-element");
    rightArrow.classList.add("hide-element");
    playButton.classList.add("hide-element");
    pauseButton.classList.add("hide-element");
}

// if there are two slides, the images will be cloned for sliding motion to work left and right

if (carouselLength === 2) {

    // cloning the two images in the HTML
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

            // class "image clone" for reference only
            newDiv.setAttribute("class", "slide image-clone");

            // appending img to div
            newDiv.appendChild(newImg);

            // appending new div to carousel slides
            carouselSlides.appendChild(newDiv);
        }
    }

    // running function of cloning image
    cloneImage();
    // changing variable to detect dots for 2 slides
    twoDots = true;
}

// getting and the child elements of the slides container
let childrenArray = document.getElementById("carousel-slides").children;
//copy of the child elements for manipulation
let slidesArray = [...childrenArray];
// variable for length of array
carouselLength = slidesArray.length;

// variable for slide
let i = 0;

// Adding classes initially
slidesArray[i].classList.add("img-active");
slidesArray[i + 1].classList.add("img-right");
slidesArray[carouselLength - 1].classList.add("img-left");

// slide right function

function slideRight(event) {

    // moves active slide out of frame
    slidesArray[i].classList.add("img-left");
    slidesArray[i].classList.remove("img-active");

    // moves slide into frame
    slidesArray[i + 1].classList.add("img-active");
    slidesArray[i + 1].classList.remove("img-right");

    // lines up next slide
    slidesArray[i + 2].classList.add("img-right");

    // removes left class from original active slide 
    slidesArray[carouselLength - 1].classList.remove("img-left");

    // attributes required for 3 slides
    if (carouselLength === 3) {
        for (let j=0; j<carouselLength; j++) {
            if (slidesArray[j].classList.contains("img-right")) {
                // adds index for image to move from right to left without being seen
                slidesArray[j].classList.add("img-index");
            } else {
                // brings images to the front by removing index
                slidesArray[j].classList.remove("img-index");
            }
        }
    }

    // attributes required for more than 3 slides
    if (carouselLength > 3) {
        for (let j = 0; j < carouselLength; j++) {
            if (slidesArray[j].classList.contains("img-right") || 
            slidesArray[j].classList.contains("img-active") || 
            slidesArray[j].classList.contains("img-left")) {
                // brings images to the front by removing index
                slidesArray[j].classList.remove("img-index");
            } else {
                // put all non-active images towards the back
                slidesArray[j].classList.add("img-index");
            }
        }
    }

    // restarts array order
    slidesArray.push(slidesArray.shift())
}

// slide left function
function slideLeft(event) {

    // moves active slide out of frame
    slidesArray[i].classList.add("img-right");
    slidesArray[i].classList.remove("img-active");

    // moves slide into frame
    slidesArray[carouselLength - 1].classList.add("img-active");
    slidesArray[carouselLength - 1].classList.remove("img-left");

    // lines up next slide
    slidesArray[carouselLength - 2].classList.add("img-left");

    // removes right class from original active slide
    slidesArray[i+1].classList.remove("img-right");

    // attributes required for 3 slides
    if (carouselLength === 3) {
        for (let j=0; j<carouselLength; j++) {
            if (slidesArray[j].classList.contains("img-left")) {
                // adds index for image to move from left to right without being seen
                slidesArray[j].classList.add("img-index");
            } else {
                // brings images to the front by removing index
                slidesArray[j].classList.remove("img-index");
            }
        }
    }

    // attributes required for more than 3 slides
    if (carouselLength > 3) {
        for (let j = 0; j < carouselLength; j++) {
            if (slidesArray[j].classList.contains("img-right") || 
            slidesArray[j].classList.contains("img-active") || 
            slidesArray[j].classList.contains("img-left")) {
                // brings images to the front by removing index
                slidesArray[j].classList.remove("img-index");
            } else {
                // put all non-active images towards the back
                slidesArray[j].classList.add("img-index");
            }
        }
    }

    // restarts array order
    slidesArray.unshift(slidesArray.pop())

}

// creating dots
function createDots() {
    // for when there are 2 images in the carousel and ignores clones
    if (twoDots === true) {
        for (let k = 0; k < 2; k++) {

            let newDotDiv = document.createElement("div");
            newDotDiv.setAttribute("alt", "dot");
            carouselDots.appendChild(newDotDiv);
        }

        // creates dots for 3 or more slides
    } else if (carouselLength > 1) {
        for (let k = 0; k < carouselLength; k++) {

            let newDotDiv = document.createElement("div");
            newDotDiv.setAttribute("alt", "dot");
            carouselDots.appendChild(newDotDiv);
        }
    }
}
// calling function
createDots();


// sets the first dot
let d = 0;
carouselDots.children[d].setAttribute("class", "dot-active");

function rightDot() {
    // for when there are 2 images in the carousel and ignores clones
    if (twoDots === true) {
        if (carouselDots.children[0].hasAttribute("class", "dot-active") === true) {
            carouselDots.children[0].removeAttribute("class", "dot-active");
            carouselDots.children[1].setAttribute("class", "dot-active");
        } else {
            carouselDots.children[0].setAttribute("class", "dot-active");
            carouselDots.children[1].removeAttribute("class", "dot-active");
        }
        // for 3 or more images
    } else {
        for (let x = 0; x < carouselLength; x++) {
            carouselDots.children[x].removeAttribute("class", "dot-active");
        }
        if (d >= carouselLength - 1) {
            d = 0;
        } else {
            d += 1;
        }
        carouselDots.children[d].setAttribute("class", "dot-active");
    }
}

function leftDot() {
    // for when there are 2 images in the carousel and ignores clones
    if (twoDots === true) {
        if (carouselDots.children[0].hasAttribute("class", "dot-active") === true) {
            carouselDots.children[0].removeAttribute("class", "dot-active");
            carouselDots.children[1].setAttribute("class", "dot-active");
        } else {
            carouselDots.children[0].setAttribute("class", "dot-active");
            carouselDots.children[1].removeAttribute("class", "dot-active");
        }
        // for 3 or more images
    } else {
        for (let x = 0; x < carouselLength; x++) {
            carouselDots.children[x].removeAttribute("class", "dot-active");
        }
        if (d <= 0) {
            d = carouselLength - 1;
        } else {
            d -= 1;
        }
        carouselDots.children[d].setAttribute("class", "dot-active");
    }
}

function playSlides(event) {
    play = setInterval(slideRight, 1500);
    playDot = setInterval(rightDot, 1500);
    playButton.classList.add("play-hide");
    pauseButton.classList.remove("play-hide");
}

function pauseSlides() {
    clearInterval(play);
    clearInterval(playDot);
    playButton.classList.remove("play-hide");
    pauseButton.classList.add("play-hide");
}

// function for pressing left and right arrow keys
function keyPress(event) {
    if (event.which === 39) {
        slideRight();
        rightDot();
    }
    if (event.which === 37) {
        slideLeft();
        leftDot();
    }
}


// event listener for clicking left and right
rightArrow.addEventListener("click", slideRight);
leftArrow.addEventListener("click", slideLeft);

// dots
rightArrow.addEventListener("click", rightDot);
leftArrow.addEventListener("click", leftDot);


// event listener for left and right arrow keys
document.addEventListener("keyup", keyPress);

// event listener for clicking play and pause
playButton.addEventListener("click", playSlides);
pauseButton.addEventListener("click", pauseSlides);