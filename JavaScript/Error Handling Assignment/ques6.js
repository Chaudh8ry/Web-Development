// Define the Calculator class
class Calculator {
    // Static method to add two numbers
    static add(a, b) {
        return a + b;
    }
}

// Call the static add method without creating an instance of Calculator
const result = Calculator.add(5, 7);

// Log the result
console.log(result); // Should output: 12
