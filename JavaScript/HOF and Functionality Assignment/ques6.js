// Function to validate LinkedIn profile URLs using regex
function validateLinkedInURL(url) {
    // Regex pattern for validating LinkedIn profile URLs
    const linkedInPattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}$/;

    // Test the input URL against the pattern
    if (linkedInPattern.test(url)) {
        console.log("The LinkedIn profile URL is valid.");
    } else {
        console.log("The LinkedIn profile URL is invalid.");
    }
}

// Test cases
const url1 = "https://www.linkedin.com/in/john-doe123";
const url2 = "https://www.linkedin.com/in/jane_doe";
const url3 = "https://www.linkedin.com/in/johndoe_12345";
const url4 = "https://www.linkedin.com/in/jo";
const url5 = "https://www.linkedin.com/in/john@doe"; // Invalid due to '@'
const url6 = "https://linkedin.com/in/johndoe123"; // Invalid due to missing 'www.'
const url7 = "https://www.linkedin.com/in/john.doe"; // Invalid due to '.'

// Validate the URLs
validateLinkedInURL(url1); // Should be valid
validateLinkedInURL(url2); // Should be valid
validateLinkedInURL(url3); // Should be valid
validateLinkedInURL(url4); // Should be invalid (too short)
validateLinkedInURL(url5); // Should be invalid (invalid character '@')
validateLinkedInURL(url6); // Should be invalid (missing 'www.')
validateLinkedInURL(url7); // Should be invalid (invalid character '.')
