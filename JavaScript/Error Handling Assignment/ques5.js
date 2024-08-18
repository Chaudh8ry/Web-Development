// Define the Person class
class Person {
    // Constructor with default parameters
    constructor(name = 'Unknown', age = 0) {
        this.name = name;
        this.age = age;
    }

    // Method to return details of the person
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

// Instantiate instances of the Person class
const person1 = new Person(); // Using default values
const person2 = new Person('Alice', 30); // Providing specific values

// Call the getDetails method and log the results
console.log(person1.getDetails()); // Should output: "Name: Unknown, Age: 0"
console.log(person2.getDetails()); // Should output: "Name: Alice, Age: 30"
