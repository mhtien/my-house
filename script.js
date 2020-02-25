const sun = document.getElementsByClassName("sun")[0];



function replaceBackground(event) {
    const hiddenElement = document.getElementsByClassName("hidden-sky")[0];
    const nightBg = document.getElementsByClassName("night-background")[0];
    if (hiddenElement == undefined) {
        nightBg.classList.add("hidden-sky")
    } else {
        nightBg.classList.remove("hidden-sky");
    }

}



sun.addEventListener("click", replaceBackground);


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
