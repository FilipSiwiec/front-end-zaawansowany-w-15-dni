// jquery

// $("button, .hide").on("click", function(){
//     console.log("dziala");
//     $(".modal-wrap, .article").toggleClass("active");
// })

// JavaScript

const button = document.querySelector("button");
const Xik = document.querySelector(".hide");

button.addEventListener("click", function(){
    // console.log("dziala");
    document.querySelector(".modal-wrap").classList.toggle("active");
    document.querySelector(".article").classList.toggle("active");
})

Xik.addEventListener("click", function(){
    console.log("dziala");
    document.querySelector(".modal-wrap").classList.toggle("active");
    document.querySelector(".article").classList.toggle("active");
    
})