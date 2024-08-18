// Function to validate a URL using regex
function validateURL(url) {
    // Regex pattern for validating a URL
    const urlPattern = /^(https?:\/\/)[a-zA-Z0-9-_.]+\.[a-zA-Z]{2,}$/;

    // Test the input URL against the pattern
    if (urlPattern.test(url)) {
        console.log("The URL is valid.");
    } else {
        console.log("The URL is invalid.");
    }
}

// Test cases
const url1 = "http://example.com";
const url2 = "https://www.example.com";
const url3 = "ftp://example.com"; // Invalid
const url4 = "http://example"; // Invalid
const url5 = "https://example.com/some-path"; // Valid based on simple regex

// Validate the URLs
validateURL(url1); // Should be valid
validateURL(url2); // Should be valid
validateURL(url3); // Should be invalid
validateURL(url4); // Should be invalid
validateURL(url5); // Should be valid
