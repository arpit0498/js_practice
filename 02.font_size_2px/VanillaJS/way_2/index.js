input = document.querySelector("#input-text")


incBtn = document.querySelector("#increase")
decBtn = document.querySelector("#decrease")

output = document.querySelector("#output")


input.addEventListener('input', () => {
    output.innerHTML = input.value
})

incBtn.addEventListener('click', increaseFont)
decBtn.addEventListener('click', decreaseSize)

var fontSize = 16;

function increaseFont() {
    fontSize = fontSize + 2

    output.style.fontSize = fontSize + "px"

}


function decreaseSize() {
    fontSize = fontSize - 2
    output.style.fontSize = fontSize + "px";
}
