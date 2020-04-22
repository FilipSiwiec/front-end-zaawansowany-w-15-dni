// const ham = document.querySelector(".burger");
// const side = document.querySelector("aside");
// const wrap = document.querySelector(".wrapper");
// const bar = document.querySelector(".fa-bars");
// const x = document.querySelector(".fa-times");

// ham.addEventListener("click", function(){
//     // console.log("dziala");
//     bar.classList.toggle("show");
//     x.classList.toggle("show");
//     side.classList.toggle("show");
//     wrap.classList.toggle("show");
// })

// $(".burger").on("click", function(){
//     console.log("dziala");
//     $(".fas, aside, .wrapper").toggleClass("show");
// })

const ham = document.querySelector(".burger");
const active = document.querySelectorAll(".active");

ham.addEventListener("click", function(){
    for ( i = 0; i < active.length; i++){
        active[i].classList.toggle("show");
    }
})

