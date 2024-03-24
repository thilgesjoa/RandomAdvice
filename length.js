// Function to generate a random string of alphanumeric characters
function generateRandomString(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomString = '';
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters[randomIndex];
    }
    
    return randomString;
}

// Generate a random string of length 10
const randomString = generateRandomString(10);
console.log("Random String:", randomString);
