// Add a input field.Insert a sentence.Now create a button.On clicking the button, highlight the word in the sentence with most number of characters

const inputField = document.querySelector('#text-input');
const highlightBtn = document.querySelector('#highlight');
const outputDiv = document.querySelector('#output');

highlightBtn.addEventListener('click', () => {
    highlightWord(inputField.value);
});

function highlightWord(sentence) {
    const wordObj = {};
    let word = '';
    let maxWord = '';
    let maxLength = 0;
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === " " || sentence[i] === ".") {
            wordObj[word] = word.length;
            word = "";
        } else {
            word += sentence[i];
        }
    }
    for (let i in wordObj) {
        if (wordObj[i] > maxLength) {
            maxLength = wordObj[i];
            maxWord = i;
        }
    }
    outputDiv.innerHTML = `${sentence.replace(maxWord, `<span>${maxWord}</span>`)}`;
}