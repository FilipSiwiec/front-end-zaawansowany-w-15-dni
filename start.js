let guzik = document.querySelector(".js");


let dzialanie = function () {
    let divik = document.createElement("div");
    document.body.appendChild(divik);
    divik.classList.add("box");
}

guzik.addEventListener("click", dzialanie);