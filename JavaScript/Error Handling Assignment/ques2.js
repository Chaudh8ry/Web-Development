function getPerson(person) {
    try {
        // Validate that the input is an object and has the required properties
        if (typeof person !== 'object' || person === null || !('name' in person) || !('age' in person)) {
            throw new Error("Invalid parameter type");
        }

        // Extract name and age from the object
        const { name, age } = person;

        // Check that name is a string and age is a number
        if (typeof name !== 'string' || typeof age !== 'number') {
            throw new Error("Invalid parameter type");
        }

        // Return the formatted string
        return `Name: ${name}, Age: ${age}`;
    } catch (error) {
        // Return the error message if an exception occurs
        return error.message;
    }
}

// Test cases
console.log(getPerson({ name: "Alice", age: 30 })); // Should return "Name: Alice, Age: 30"
console.log(getPerson({ name: "Bob", age: "25" })); // Should return "Invalid parameter type"
console.log(getPerson({ name: "Charlie" })); // Should return "Invalid parameter type"
console.log(getPerson(null)); // Should return "Invalid parameter type"
console.log(getPerson("Not an object")); // Should return "Invalid parameter type"
