var textInp = document.querySelector("#input");

var output = document.querySelector("#output");

var incBtn = document.querySelector("#inc");
var decBtn = document.querySelector("#dec");

incBtn.addEventListener('click', inc);
decBtn.addEventListener('click', dec);

function inc() {

    var style = window.getComputedStyle(textInp, null).getPropertyValue('font-size')
    currentSize = parseFloat(style)
    textInp.style.fontSize = (currentSize + 2) + 'px'
    console.log("inc")
}
function dec() {

    var style = window.getComputedStyle(textInp, null).getPropertyValue('font-size')
    currentSize = parseFloat(style)
    textInp.style.fontSize = (currentSize - 2) + 'px'
    console.log("dec")
}

console.log(decBtn)
