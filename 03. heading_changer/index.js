var input = document.querySelector("#input");

var h1 = document.querySelector("#h1-btn");
var h2 = document.querySelector("#h2-btn");
var h3 = document.querySelector("#h3-btn");

var output = document.querySelector("#output");


input.addEventListener('input', () => {
    output.innerText = input.value;
    console.log(input.value)
})

h1.addEventListener('click', convertH1);
h2.addEventListener('click', convertH2);
h3.addEventListener('click', convertH3);

function convertH1() {
    output.innerHTML = `<h1> ${input.value} </h1>`

    console.log("h1")
}

function convertH2() {
    output.innerHTML = `<h2> ${input.value} </h2>`
    console.log("h2")
}


function convertH3() {
    output.innerHTML = `<h3> ${input.value} </h3>`
    console.log("h3")
}
