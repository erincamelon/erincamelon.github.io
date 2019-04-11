//show content of content box when click show//
document.getElementById("show").addEventListener("click", fshow);

function fshow() {
document.getElementById("content").style.display = "block";
}

//hide content of content box when click hide//
document.getElementById("hide").addEventListener("click", fhide);

function fhide() {
document.getElementById("content").style.display = "none";
}

//make content text 12px when click small box//
document.getElementById("small").addEventListener("click", fsmall);

function fsmall () {
document.getElementById("content").style.fontSize = "12px";
}

//make content text 48px when click large box//
document.getElementById("big").addEventListener("click", fbig);

function fbig () {
document.getElementById("content").style.fontSize = "48px";
}

//change background color of content box to blue when user clicks 'Blue Back' nav button//
document.getElementById("blue").addEventListener("click", fblue);

function fblue() {
  document.getElementById("content").style.backgroundColor = "#C5CAE9";
}

//change background color of content box to when user clicks 'Back Red' nav button//
document.getElementById("red").addEventListener("click", fred);

function fred() {
  document.getElementById("content").style.backgroundColor = "#FFA291";
}

