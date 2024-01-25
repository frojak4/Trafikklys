const rødtLys = document.getElementById("red");
const gultLys = document.getElementById("yellow");
const grøntLys = document.getElementById("green");
let myInterval;

function rød() {
    rødtLys.style.backgroundColor = "red";
    gultLys.style.backgroundColor = "white";
    grøntLys.style.backgroundColor = "white";
    clearInterval(myInterval);
    myInterval = setInterval(gul, 10000);
}

function gul() {
    rødtLys.style.backgroundColor = "white";
    gultLys.style.backgroundColor = "yellow";
    grøntLys.style.backgroundColor = "white";
    clearInterval(myInterval);
    myInterval = setInterval(grønn, 1000);
}

function grønn() {
    rødtLys.style.backgroundColor = "white";
    gultLys.style.backgroundColor = "white";
    grøntLys.style.backgroundColor = "green";
    clearInterval(myInterval);
    myInterval = setInterval(rød, 10000);
}

