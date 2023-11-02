const min = 1;
const max = 10;
const num = 5;
let numOfGuesses = 0;
let guesses = [];

function getName() {
    return prompt('Hello. Please enter your name.');
}

function guessAgain(name) {
    let guess = prompt(`${name}, Guess a number from ${min} to ${max}.`);
    if (guess >= min && guess <= max) {
        numOfGuesses++;
        if (guess == num) {
            if (numOfGuesses == 1) {
                return alert(`You got it ${name}. In ${numOfGuesses} guess.`);
            }
            if (numOfGuesses > 1) {
                return alert(`You got it ${name}. In ${numOfGuesses} guesses.\nYour previous guesses were ${guesses}.`);
            }
        } else {
            if (guess < num) {
                alert(`${name}, you should guess higher.`);
            }
            if (guess > num) {
                alert(`${name}, you should guess lower.`);
            }
            guesses.push(guess);
        }
    } else {
        alert('Not in range.');
    }
    guessAgain(name);
}

let name = getName();
guessAgain(name);