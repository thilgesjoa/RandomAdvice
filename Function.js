// Function to calculate the factorial of a number using recursion
function factorial(n) {
    // Base case: if n is 0 or 1, factorial is 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive case: multiply n by factorial of (n-1)
    return n * factorial(n - 1);
}

// Test the factorial function with a number
const number = 5;
const result = factorial(number);

// Display the result
console.log(`Factorial of ${number} is ${result}`);
