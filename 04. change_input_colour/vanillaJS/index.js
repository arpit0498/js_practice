var input = document.querySelector("#input");

var red = document.querySelector('#red-btn');
var green = document.querySelector('#green-btn');
var blue = document.querySelector('#blue-btn');

var output = document.querySelector('#output');

red.addEventListener('click', convertRed);
green.addEventListener('click', convertGreen);
blue.addEventListener('click', convertBlue);

function convertBlue() {
    input.style.color = "blue";
    console.log(blue)
    console.log(input.style.color)
}

function convertGreen() {
    input.style.color = "green";
    console.log(green)
    console.log(input.style.color)
}

function convertRed() {
    input.style.color = "red";
    console.log(red)
    console.log(input.style.color)
}

input.addEventListener('input', () => {
    output.innerText = input.value
    console.log(input.value)
})