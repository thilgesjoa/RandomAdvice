// Function to calculate the factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Test cases
const numbers = [0, 1, 2, 3, 4, 5];

// Calculate and display the factorial for each test number
numbers.forEach(num => {
    console.log(`Factorial of ${num}:`, factorial(num));
});
