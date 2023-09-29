// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Get HTML elements
const guessInput = document.getElementById("guess");
const checkButton = document.getElementById("check");
const message = document.getElementById("message");
const attempts = document.getElementById("attempts");
let attemptsCount = 0;

// Function to display a message with a simple animation
function displayMessage(msg) {
    message.style.animation = "none"; // Reset animation
    void message.offsetWidth; // Trigger reflow
    message.style.animation = null; // Restart animation
    message.textContent = msg;
}

// Function to check the guess
function checkGuess() {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        displayMessage("Please enter a valid number between 1 and 100.");
        return;
    }

    attemptsCount++;

    if (userGuess === randomNumber) {
        displayMessage(`Congratulations! You guessed the number ${randomNumber} in ${attemptsCount} attempts.`);
        guessInput.disabled = true;
        checkButton.disabled = true;
        checkButton.style.backgroundColor = "#777";
    } else if (userGuess < randomNumber) {
        displayMessage("Try a higher number.");
    } else {
        displayMessage("Try a lower number.");
    }

    attempts.textContent = attemptsCount;
    guessInput.value = "";
}

// Event listener for the Check button
checkButton.addEventListener("click", checkGuess);
