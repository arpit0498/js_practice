// Create a password checker web app.If password is lesser than 10 characters then show an error to user otherwise show success.Someone can ask to make the submit button disabled.Some can ask to make the input field green or red depending on input.

var input = document.querySelector('#input');
var checkBtn = document.querySelector('#check');
var output = document.querySelector('#output');

checkBtn.addEventListener('click', check_handler);

input.addEventListener('input', () => {
    output.innerText = input.value
    var inputTxt = input.value.length

    if (inputTxt < 5) {
        checkBtn.disabled = true;
        input.style.color = "red"

    } else if (inputTxt > 10) {
        checkBtn.disabled = false;
        input.style.color = "green"
    } else {
        checkBtn.disabled = false;
        input.style.color = "yellow"
    }
})

function check_handler() {
    if (input.value.length < 10) {
        output.innerText = "failed ! Plz increase length of password"
        // output.style.color = "red"

    } else {
        output.innerText = "success"
        output.style.color = "green"
        console.log(output.style)

    }
}




