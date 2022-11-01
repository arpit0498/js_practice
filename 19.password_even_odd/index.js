var input = document.querySelector("#text-input");

var showBtn = document.querySelector('#check-btn');

var output = document.querySelector("#output");

input.addEventListener('input', () => {
    if (input.value.length % 2 == 0) {
        input.style.color = 'red'

    } else { input.style.color = 'green' }

})

showBtn.addEventListener('click', clkHandler)

function clkHandler() {
    if (input.value.length % 2 == 0) {
        output.innerText = "Even"
        input.style.color = 'red'


    } else {
        output.innerText = "Odd"
        input.style.color = 'green'
    }
    console.log("check")
}