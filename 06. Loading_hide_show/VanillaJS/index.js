var btn_loaded = document.querySelector("#loaded");

var output = document.querySelector("#output");

btn_loaded.addEventListener('click', clkHandler);

function clkHandler() {
    if (output.style.display == "block") {
        output.style.display = "none"
    }
    else {
        output.style.display = "block"
    }
    console.log(output.style.display)
}


