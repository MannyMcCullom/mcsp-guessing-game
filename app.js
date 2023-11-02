const min = 1;
const max = 10;
const num = 5;
let numOfGuesses = 0;
let guesses = [];



function guessAgain() {
    let guess = prompt(`Guess a number from ${min} to ${max}.`);
    if (guess >= min && guess <= max) {
        numOfGuesses++;
        if (guess == num) {
            if (numOfGuesses == 1) {
                return alert(`You got it in ${numOfGuesses} guess.`);
            }
            if (numOfGuesses > 1) {
                return alert(`You got it in ${numOfGuesses} guesses.\nYour previous guesses were ${guesses}.`);
            }
        } else {
            if (guess < num) {
                alert('You should have guessed higher.');
            }
            if (guess > num) {
                alert('You should have guesses lower.');
            }
            guesses.push(guess);
        }
    } else {
        alert('Not in range.');
    }
    guessAgain();
}

guessAgain();