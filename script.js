const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];


function generatePassword() {
    let pass = "";
    for (let i = 0; i < 15; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        pass += characters[randomIndex]
    }
    return pass;
}

function copyTextToClipBoard(passwordButton) {
    passwordButton.select();
    passwordButton.selectionRange(0, 9999);

    navigator.clipboard.writeText(passwordButton.value);

    console.log(`Copied ${passwordButton.value} to clipboard`);

}

document.addEventListener('DOMContentLoaded', function () {
    const generateBtn = document.querySelector('.btn-generate');
    const password1 = document.getElementById('password1');
    const password2 = document.getElementById('password2');

    generateBtn.addEventListener('click', function () {
        password1.textContent = generatePassword();
        password2.textContent = generatePassword();
    })

    password1.addEventListener('click', function () {
        copyTextToClipBoard(password1)
    })

    password2.addEventListener('click', function () {
        copyTextToClipBoard(password2)
    })
})





