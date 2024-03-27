// Function that returns a Promise that resolves after a specified time
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Asynchronous function that uses the delay function
async function example() {
    console.log("Before await");
    await delay(2000); // Pause execution for 2000 milliseconds (2 seconds)
    console.log("After await");
}

// Call the asynchronous function
example();
