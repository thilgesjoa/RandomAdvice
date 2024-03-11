// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Function to calculate the sum of all prime numbers within a given range
function sumOfPrimes(start, end) {
    let sum = 0;
    for (let num = start; num <= end; num++) {
        if (isPrime(num)) {
            sum += num;
        }
    }
    return sum;
}

// Define the range
const startRange = 1;
const endRange = 100;

// Calculate the sum of prime numbers within the range
const primeSum = sumOfPrimes(startRange, endRange);

// Display the result
console.log(`The sum of prime numbers between ${startRange} and ${endRange} is: ${primeSum}`);
