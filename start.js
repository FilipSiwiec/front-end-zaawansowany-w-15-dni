const dodaj = document.querySelector('button.bigger');
const odejm = document.querySelector('button.smaller');
let par = document.querySelector("p");

let textSize = 16;
par.style.fontSize = textSize + "px";


let dodajemy = function (){
    textSize++;
    par.style.fontSize = textSize + "px";
}

let odejmujemy = function (){
    textSize--;
    par.style.fontSize = textSize + "px";
}

dodaj.addEventListener("click", dodajemy);
odejm.addEventListener("click", odejmujemy);



