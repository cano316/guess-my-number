// declaring variables

let randomNum = Math.floor((Math.random() * 11));
//since I want a random number between 0 and 10, I will mutiply math random by 11 to get a max product of 10.99
//I will then floor that number to get to 10.
let guess;

let guesses = 0;

let isCorrect = false;

//These are the only variables I need. Now lets work on the logic:

while (isCorrect == false) {
    guess = prompt("I'm thinking of a number between 0 -10. What number am I thinking of?");
    if (guess < 0 || guess > 10) {
        alert("INVALID INPUT")
    } else {
        guesses = guesses + 1;
        if (guess == randomNum) {
            isCorrect = true;
            alert("WOW! YOU'RE GOOD AT THIS")
        } else {
            alert('So close! Try again!')
        }
    }
}
alert("Correct! The number I was thinking of was " + randomNum + ". Good job! It only took you " + guesses + " tries!")
