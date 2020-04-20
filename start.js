let pierwszy = document.querySelector(".s1");
let drugi = document.querySelector(".s2");

let funkcja = function(){
    
    pierwszy.classList.toggle('red');
    drugi.classList.toggle("red")
    console.log(this);
}

pierwszy.addEventListener("click", funkcja);