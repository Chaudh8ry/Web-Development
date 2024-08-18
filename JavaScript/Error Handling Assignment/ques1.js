function convertToNumber(str) {
    try {
        // Attempt to convert the string to a number
        const number = Number(str);

        // Check if the result is a valid number
        if (isNaN(number)) {
            throw new Error("Invalid number");
        }

        // Return the converted number
        return number;
    } catch (error) {
        // Return the error message if conversion fails
        return error.message;
    }
}

// Test cases
console.log(convertToNumber("123")); // Should return 123
console.log(convertToNumber("45.67")); // Should return 45.67
console.log(convertToNumber("abc")); // Should return "Invalid number"
console.log(convertToNumber("10abc")); // Should return "Invalid number"
console.log(convertToNumber("")); // Should return "Invalid number"
