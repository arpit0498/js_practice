var input = document.querySelector('#input');

var fetchBtn = document.querySelector('#btn-fetch');
var capBtn = document.querySelector('#btn-capital');

var output = document.querySelector('#output');

var url = "https://api.funtranslations.com/translate/shakespeare.json";

fetchBtn.addEventListener('click', fetchApi);
function useInput(text) {
    return url + "?" + "text=" + text
}

function fetchApi() {
    fetch(useInput(input.value))
        .then(response => response.json())
        .then(data => output.innerText = data.contents.text)
        // .then(data => console.log(data))
        .catch(error => console.log(error))
    // console.log(useInput)
}

capBtn.addEventListener('click', cap);

function cap() {

    output.style.textTransform = "capitalize"
    // console.log("Cap")
}

