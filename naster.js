
// bars

let bars = document.querySelector("#bars");
let nav = document.querySelector(".nav");

bars.onclick = function () {
    if(nav.style.display == "none"){
            nav.style.display = "flex";
        }
        else{
            nav.style.display = "none";
        }
};


//lets

let home = document.querySelector(".home");
let communicate = document.querySelector(".Communicate");
let down = document.querySelector(".down");
let print = document.querySelector(".print1");
let Connectwithus = document.querySelector(".Connectwithus");
let Publish = document.getElementById("Publish");

// btns

home.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}


Publish.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}


Connectwithus.onclick = () => {
    window.scrollTo({
        top: 10000,
        behavior: "smooth"
    })
}


communicate.onclick = () => {
    window.scrollTo({
        top: 10000,
        behavior: "smooth"
    })
}



down.onclick = () => {
    window.scrollTo({
        top: 10000,
        behavior: "smooth"
    })
}