// night time sky 
const sun = document.getElementsByClassName("sun")[0];

function nightMode(event) {
    const hidden = document.body.classList[0];
    const bodyClass = document.body;
    const sunVis = document.getElementsByClassName("sun-vis")[0];
    const moonVis = document.getElementsByClassName("moon-vis")[0];


    if (hidden == undefined) {
        bodyClass.classList.add("hidden");
        sunVis.classList.remove("hide-sun");
        moonVis.classList.add("hide-sun");

    } else {
        bodyClass.classList.remove("hidden");
        sunVis.classList.add("hide-sun");
        moonVis.classList.remove("hide-sun");
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

let slidesArray = [imageOne, imageTwo, imageThree, imageFour];

function slideRight(event) {

        // moves active slide out of frame
        slidesArray[0].classList.add("img-left");
        slidesArray[0].classList.remove("img-active");
    
        // moves slide into frame
        slidesArray[1].classList.add("img-active");
        slidesArray[1].classList.remove("img-right");

        // lines up next frames
        slidesArray[2].classList.add("img-right");
        slidesArray[2].classList.remove("img-hidden");
    
        slidesArray[3].classList.remove("img-left")
        slidesArray[3].classList.add("img-hidden");
       

        slidesArray.push(slidesArray.shift());


    

        console.log(slidesArray);

    

}

rightArrow.addEventListener("click", slideRight);
