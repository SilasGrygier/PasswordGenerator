const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];


function generatePassword(passLength) {
    let pass = "";
    for (let i = 0; i < passLength; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        pass += characters[randomIndex]
    }
    return pass;
}

function copyTextToClipBoard(passwordElement) {
    const text = passwordElement.textContent;

    if (!text || text === '✓ Copied!') {
        return; // Nothing to copy
    }

    navigator.clipboard.writeText(text)
        .then(() => {
            // Add animation class
            passwordElement.classList.add('copied');
            const originalText = text;
            passwordElement.textContent = '✓ Copied!';

            setTimeout(() => {
                passwordElement.textContent = originalText;
                passwordElement.classList.remove('copied');
            }, 1200);
        })
        .catch(err => {
            console.log('Failed to copy:', err);
        });


}

document.addEventListener('DOMContentLoaded', function () {
    const generateBtn = document.querySelector('.btn-generate');
    const password1 = document.getElementById('password1');
    const password2 = document.getElementById('password2');
    const slider = document.getElementById('length-slider');
    const sliderValue = document.getElementById('length-value');


    generateBtn.addEventListener('click', function () {
        const currentLength = parseInt(slider.value);
        password1.textContent = generatePassword(currentLength);
        password2.textContent = generatePassword(currentLength);
    })

    password1.addEventListener('click', function () {
        copyTextToClipBoard(password1)
    })

    password2.addEventListener('click', function () {
        copyTextToClipBoard(password2)
    })

    slider.addEventListener('input', function () {
        sliderValue.textContent = this.value;
    })
})





