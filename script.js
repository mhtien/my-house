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

// const leftArrow = document.getElementsByClassName("left-arrow")[0];
// const rightArrow = document.getElementsByClassName("rihgt-arrow")[0];

// function slideLeft(event) {
    
// }

// leftArrow.addEventListener("click", slideLeft);
