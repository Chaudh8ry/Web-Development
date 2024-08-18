// Define the Employee class
class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    // Method to return the salary of the employee
    getSalary() {
        return this.salary;
    }
}

// Instantiate an instance of the Employee class
const employee = new Employee('Jane Doe', 'Software Engineer', 75000);

// Call the getSalary method and log the result
console.log(employee.getSalary()); // Should output: 75000
