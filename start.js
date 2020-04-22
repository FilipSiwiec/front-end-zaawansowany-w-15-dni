const ham = document.querySelector(".burger");
const side = document.querySelector("aside");

const bar = document.querySelector(".fa-bars");
const x = document.querySelector(".fa-times");

ham.addEventListener("click", function(){
    // console.log("dziala");
    bar.classList.toggle("show");
    x.classList.toggle("show");
    side.classList.toggle("left");

})