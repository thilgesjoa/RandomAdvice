// Function to remove duplicate elements from an array while preserving order
function removeDuplicates(arr) {
    const uniqueArray = [];
    const seen = new Set();

    for (let item of arr) {
        if (!seen.has(item)) {
            uniqueArray.push(item);
            seen.add(item);
        }
    }

    return uniqueArray;
}

// Test case
const numbers = [1, 2, 3, 2, 4, 5, 3, 6, 7, 1];
console.log("Array with duplicates:", numbers);
console.log("Array without duplicates:", removeDuplicates(numbers));
