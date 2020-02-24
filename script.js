const sun = document.getElementsByClassName("sun")[0];

const body1 = getComputedStyle(document.body)
const daytimebg = "url('images/background.svg')"
const nighttimebg = "url('images/background-night.svg')"

function replaceBackground(event) {
       if (body1.getPropertyValue("background-image") === daytimebg) {
           document.body.style.setProperty("background-image", nighttimebg)
       } else {
        document.body.style.setProperty("background-image", daytimebg)
       }
      

}



sun.addEventListener("click", replaceBackground) 


// const sun = document.getElementsByClassName("sun")[0];

// let body = document.body;

// function replaceBackground(event) {
//     if (body.style.backgroundImage === "url("images/background.svg")") {
//         body.style.backgroundImage = "url('images/background-night.svg')"
//     } else {
//         body.style.backgroundImage = "url("images/background.svg")"
//     }
    

// }



// sun.addEventListener("click", replaceBackground) 
