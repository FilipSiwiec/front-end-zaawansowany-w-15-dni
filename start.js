const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");

burger.addEventListener("click", function(){
    console.log("dziala");
    burger.classList.toggle("on");
    nav.classList.toggle("on");

})