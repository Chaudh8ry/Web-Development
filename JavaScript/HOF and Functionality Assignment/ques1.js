// Question 1
// Function to reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}

// Input string
let input = "Hello, World!";

// Delay of 2 seconds (2000 milliseconds) before reversing the string
setTimeout(function() {
    // Reverse the string
    let reversedString = reverseString(input);
    // Print the reversed string to the console
    console.log("Reversed string after 2 seconds: " + reversedString);
}, 2000);
