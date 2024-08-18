// Define the numberChecker function
function numberChecker(array) {
    // Return a function that checks if a number is in the array
    return function(number) {
        return array.includes(number);
    };
}

// Example usage
const myNumbers = [1, 2, 3, 4, 5];
const checkNumber = numberChecker(myNumbers);

console.log(checkNumber(3)); // Should output: true
console.log(checkNumber(6)); // Should output: false
