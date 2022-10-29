var first = document.querySelector("#firstNum");
var second = document.querySelector("#SecondNum");

var addbtn = document.querySelector("#add");
var subbtn = document.querySelector("#sub");
var divbtn = document.querySelector("#div");
var mulbtn = document.querySelector("#mul");

var result = document.querySelector("#result");

addbtn.addEventListener('click', add);
subbtn.addEventListener('click', sub);
divbtn.addEventListener('click', div);
mulbtn.addEventListener('click', mul);

function add() {
    var output = parseInt(first.value) + parseInt(second.value);
    result.innerText = output
    console.log(first.value)
    console.log(second.value)

    console.log(output.value)
}

function sub() {
    var output = parseInt(first.value) - parseInt(second.value);
    result.innerText = output

    console.log("sub")
}
function div() {
    var output = parseInt(first.value) / parseInt(second.value);
    result.innerText = output
    console.log("div")
}
function mul() {
    var output = parseInt(first.value) * parseInt(second.value);
    result.innerText = output
    console.log("mul")
}
