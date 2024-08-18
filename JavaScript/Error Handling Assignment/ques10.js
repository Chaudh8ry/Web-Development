// Define the filterByCategory function
function filterByCategory(products) {
    // Return a function that filters products by a given category
    return function(category) {
        return products.filter(product => product.category === category);
    };
}

// Example usage
const products = [
    { id: 1, name: 'Laptop', category: 'Electronics' },
    { id: 2, name: 'Shirt', category: 'Clothing' },
    { id: 3, name: 'Smartphone', category: 'Electronics' },
    { id: 4, name: 'Book', category: 'Education' },
    { id: 5, name: 'Headphones', category: 'Electronics' }
];

// Create a filter function for Electronics
const filterElectronics = filterByCategory(products);

// Use the filter function to get only Electronics products
const electronicsProducts = filterElectronics('Electronics');
console.log(electronicsProducts);

// Use the filter function to get only Clothing products
const clothingProducts = filterElectronics('Clothing');
console.log(clothingProducts);
