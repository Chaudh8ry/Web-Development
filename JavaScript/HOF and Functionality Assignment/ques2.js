// Set the delay in seconds
let delayInSeconds = 3;

// Function to generate a random number
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
}

// Function to display progress and generate a random number after the delay
function startRandomNumberGeneration() {
    let timeRemaining = delayInSeconds;

    // Create an interval that ticks every second
    let interval = setInterval(function() {
        if (timeRemaining > 0) {
            console.log(`Time remaining: ${timeRemaining} seconds`);
            timeRemaining--;
        } else {
            clearInterval(interval); // Stop the interval
            let randomNumber = generateRandomNumber(); // Generate the random number
            console.log(`Generated Random Number: ${randomNumber}`);
        }
    }, 1000); // 1000 milliseconds = 1 second
}

// Start the process
startRandomNumberGeneration();
