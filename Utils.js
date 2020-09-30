export function getRandomNumber() {
    return Math.ceil(Math.random() * 10);


}

export function compareNumbers(guess, number) {
    if (guess === number) {
        return 0;
    } else if (guess < number) {
        return -1;
    } else if (guess > number) {
        return 1;
    }
}