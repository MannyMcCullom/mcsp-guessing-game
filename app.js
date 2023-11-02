const min = 1;
const max = 10;
const num = 5;
let guesses = 0;


function guessAgain() {
    let guess = prompt(`Guess a number from ${min} to ${max}.`);
    if (guess >= min && guess <= max) {
        guesses++;
        if (guess == num) {
            if (guesses == 1) {
                return alert(`You got it in ${guesses} guess.`);
            }
            if (guesses > 1) {
                return alert(`You got it in ${guesses} guesses.`);
            }
        } else {
            if (guess < num) {
                alert('You should have guessed higher.');
            }
            if (guess > num) {
                alert('You should have guesses lower.');
            }
        }
    } else {
        alert('Not in range.');
    }
    guessAgain();
}

guessAgain();