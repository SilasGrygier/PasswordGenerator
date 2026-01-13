const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];


function generatePassword(passLength, includeNumbers, includeSymbols) {
    // Build character pool based on options
    let characterPool = [...letters];

    if (includeNumbers) {
        characterPool = characterPool.concat(numbers);
    }

    if (includeSymbols) {
        characterPool = characterPool.concat(symbols);
    }

    // Generate password
    let pass = "";
    for (let i = 0; i < passLength; i++) {
        let randomIndex = Math.floor(Math.random() * characterPool.length);
        pass += characterPool[randomIndex];
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
    const toggleNumbers = document.getElementById('toggle-numbers');
    const toggleSymbols = document.getElementById('toggle-symbols');

    // Generate on page load
    generatePasswords();

    // Generate button
    generateBtn.addEventListener('click', generatePasswords);

    // Copy text to clipboard
    password1.addEventListener('click', () => copyTextToClipBoard(password1));
    password2.addEventListener('click', () => copyTextToClipBoard(password2));

    // Update length when slider is moved
    slider.addEventListener('input', function () { sliderValue.textContent = this.value });

    // Regenerate when toggles change
    toggleNumbers.addEventListener('change', generatePasswords);
    toggleSymbols.addEventListener('change', generatePasswords);

    // Helper function
    function generatePasswords() {
        const currentLength = parseInt(slider.value);
        const includeNumbers = toggleNumbers.checked;
        const includeSymbols = toggleSymbols.checked;

        password1.textContent = generatePassword(currentLength, includeNumbers, includeSymbols);
        password2.textContent = generatePassword(currentLength, includeNumbers, includeSymbols);
    }
})





