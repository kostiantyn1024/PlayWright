let secretNumber = Math.floor(Math.random()*111);
console.log (secretNumber)
let attempts = []

function guessNumber(userGuess) {
    attempts.push(userGuess)
    if (secretNumber < userGuess) {
        console.log ("Загаданное число меньше.")

    }
    
    else if (secretNumber > userGuess) {
        console.log ("Загаданное число больше.")
    }
    else {
        console.log ("Поздравляю! Вы угадали число!")
    }
    console.log ("Попытки:" + attempts)
}


guessNumber(34);
guessNumber(50);
guessNumber(75);

