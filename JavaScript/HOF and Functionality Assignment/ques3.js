// Store's inventory with prices in USD
const storeInventory = {
    apple: 1.5,
    banana: 0.5,
    orange: 0.75,
    mango: 2.0,
    grapes: 3.0
};

// Exchange rate from USD to INR
const exchangeRate = 80;

// Function to convert prices to INR
function convertPricesToINR(inventory, rate) {
    // Convert the inventory object to an array of entries, map through them, and convert the prices
    const convertedInventory = Object.entries(inventory).map(([item, price]) => {
        return [item, price * rate];
    });

    // Convert the array of converted entries back to an object
    return Object.fromEntries(convertedInventory);
}

// Convert the prices in the store inventory to INR
const convertedInventory = convertPricesToINR(storeInventory, exchangeRate);

// Output the new inventory with prices in INR
console.log("Inventory with prices in INR:", convertedInventory);
