const min = 1;
const max = 10;
const num = 5;

let guess = prompt(`Guess a number from ${min} to ${max}.`);

if (guess >= min && guess <= max) {
    if (guess == num) {
        alert('You guessed right.')
    } else {
        if (guess < num) {
            alert('You should have guessed higher.')
        }
        if (guess > num) {
            alert('You should have guesses lower.')
        }
    }
} else {
    alert('nope')
}