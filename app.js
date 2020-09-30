import { compareNumbers, getRandomNumber } from './Utils.js';

const guessField = document.getElementById('guessField');

const button = document.getElementById('button');

const textResult = document.getElementById('text-result');

const answer = document.getElementById('answer');

const randomNumber = getRandomNumber();

const guessesLeft = document.getElementById('guesses-left');


// THE PART ABOUT GUESSES LEFT
let guessCounter = 3;

button.addEventListener('click', () => {
    const userGuess = Number(guessField.value);
    const compareResult = compareNumbers(userGuess, randomNumber);

    

    guessCounter--;

    guessesLeft.textContent = guessCounter;

    if (guessCounter === 0) {
        textResult.textContent = 'Out of tries';

    }
  
    if (compareResult === 0) {
        answer.textContent = 'You are right!';

    }

    if (compareResult === -1) {
        answer.textContent = 'Your answer is too low';
    }
    if (compareResult === 1) {
        answer.textContent = 'Your answer is too high';
    }
});