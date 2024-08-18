class User {
    constructor(username, password) {
        this.username = username;
        this._password = ''; // Private variable to hold the actual password
        this.password = password; // Set password using the setter
    }

    // Getter for the password that returns a masked version
    get password() {
        return '*'.repeat(this._password.length);
    }

    // Setter for the password with validation
    set password(newPassword) {
        // Check if the new password is valid
        if (this.isValidPassword(newPassword)) {
            this._password = newPassword; // Set the new password
        } else {
            console.log('Error: Password must be at least 8 characters long, contain at least one number, and one uppercase letter.');
        }
    }

    // Method to validate the password
    isValidPassword(password) {
        const minLength = 8;
        const hasNumber = /\d/;
        const hasUppercase = /[A-Z]/;

        return password.length >= minLength && hasNumber.test(password) && hasUppercase.test(password);
    }
}

// Example usage
const user = new User('john_doe', 'Initial1Password'); // Set initial password using setter

console.log(user.password); // Output the masked password

user.password = 'short'; // Invalid password
user.password = 'Valid1Password'; // Valid password

console.log(user.password); // Output the new masked password
