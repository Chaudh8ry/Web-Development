// Define the Car class
class Car {
    constructor(company, model, year) {
        this.company = company;
        this.model = model;
        this.year = year;
    }

    // Method to return the description of the car
    getDescription() {
        return `This is a ${this.year} ${this.company} ${this.model}`;
    }
}

// Instantiate an instance of the Car class
const myCar = new Car('Toyota', 'Corolla', 2020);

// Call the getDescription method and log the result
console.log(myCar.getDescription()); // Should output: "This is a 2020 Toyota Corolla"
