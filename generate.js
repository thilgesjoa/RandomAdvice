// Function to generate a random password with customizable length and complexity
function generateRandomPassword(length, includeUppercase, includeNumbers, includeSpecialChars) {
    let charset = 'abcdefghijklmnopqrstuvwxyz';
    let password = '';

    // Include uppercase letters if specified
    if (includeUppercase) {
        charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    // Include numbers if specified
    if (includeNumbers) {
        charset += '0123456789';
    }

    // Include special characters if specified
    if (includeSpecialChars) {
        charset += '!@#$%^&*()-_=+';
    }

    // Generate random password
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    return password;
}

// Test case: Generate a random password with length 12 including uppercase letters, numbers, and special characters
const password = generateRandomPassword(12, true, true, true);
console.log("Random Password:", password);
