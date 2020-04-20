
let guzik = document.querySelector('button');
let kwadrat = document.querySelector(".square");


let obrot = 0;
let zmienna = 10;
kwadrat.style.transform = 'rotate(' + obrot + 'deg)';
kwadrat.style.transition = "0.5s"

let obracamy = function (){
    
    obrot += zmienna;
    kwadrat.style.transform = 'rotate(' + obrot + 'deg)';
    console.log(obrot);
}

guzik.addEventListener("click", obracamy);
