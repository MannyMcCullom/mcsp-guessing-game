const min = 1;
const max = 10;
const num = 5;
let numOfGuesses = 0;
let guesses = [];
let users = {};

function savedScore(name) {
    if (users[name] === undefined) {
        scoreDisplay(numOfGuesses, name);
        users[name] = numOfGuesses;
    } else {
        if (numOfGuesses > users[name]) {
            if (numOfGuesses - users[name] === 1) {
                alert(`you took ${numOfGuesses - users[name]} guess more than your best.`)
            } else {
                alert(`you took ${numOfGuesses - users[name]} guesses more than your best.`)
            }
        }
        if (numOfGuesses === users[name]) {
            if (numOfGuesses == 1) {
                alert(`Stop playing. You won already.`);
            } else {
                alert(`you took ${numOfGuesses} guesses on your best.`)
            }
        }
        if (numOfGuesses < users[name]) {
            if (users[name] - numOfGuesses == 1) {
                alert(`you took ${users[name] - numOfGuesses} guess less than your best.`);
            }
            if (users[name] - numOfGuesses > 1) {
                alert(`you took ${users[name] - numOfGuesses} guesses less than your best.`);
            }
            users[name] = numOfGuesses;
        }
    }
}

function scoreDisplay(numOfGuesses, name) {
    if (numOfGuesses == 1) {
        alert(`Yes! it's ${num}! You got it ${name}! In ${numOfGuesses} guess.`);
    }
    if (numOfGuesses == 2) {
        alert(`Yes! it's ${num}! You got it ${name}! In ${numOfGuesses} guesses.\nYour other guess was ${guesses}.`);
    }
    if (numOfGuesses > 2) {
        alert(`Yes! it's ${num}! You got it ${name}! In ${numOfGuesses} guesses.\nYour other guesses were ${guesses}.`);
    }
}

function playAgain(){
numOfGuesses = 0;
guesses = [];
guess = undefined;
guessingGame();
}

function getName() {
    return prompt('Hello. Please enter your name.');
}

function guessingGame() {
    let playing = true;
    let name = getName();
    while (playing === true) {
        let guess = prompt(`${name}, Guess a number from ${min} to ${max}.`);
        if (guess >= min && guess <= max) {
            numOfGuesses++;
            if (guess == num) {
                // End of game--------------------------------------------------------
                playing = false;
                savedScore(name);
                console.log(users);
                // --------------------------------------------------------
            } else {
                if (guess < num) {
                    alert('higher.');
                }
                if (guess > num) {
                    alert('lower.');
                }
                guesses.push(guess);
            }
        } else {
            alert('Not in range.');
        } 
        console.log('playing:', playing)
    }

    let answer = prompt(`${name}, Do you want to play again? y or n.`);
    if (answer.toLowerCase() == 'y') {
        console.log('yes')
        return playAgain();
    } else {
        return alert(`Thanks for playing ${name}.`)
    }
}

guessingGame();