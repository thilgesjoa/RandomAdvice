// Function to check if a year is a leap year
function isLeapYear(year) {
    // Leap years are divisible by 4
    if (year % 4 !== 0) {
        return false;
    }
    // Exception: years divisible by 100 are not leap years, unless they are also divisible by 400
    if (year % 100 === 0 && year % 400 !== 0) {
        return false;
    }
    return true;
}

// Test cases
const years = [2000, 2004, 1900, 2021, 2024];

// Check if each year is a leap year and display the result
years.forEach(year => {
    console.log(`${year} is a leap year:`, isLeapYear(year));
});
