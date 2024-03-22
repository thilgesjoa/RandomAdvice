// Function to remove duplicates from an array while preserving the original order
function removeDuplicates(arr) {
    const uniqueArray = [];
    const seen = new Set();

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (!seen.has(element)) {
            uniqueArray.push(element);
            seen.add(element);
        }
    }

    return uniqueArray;
}

// Test case
const array = [1, 2, 3, 2, 4, 5, 1, 6, 3];
console.log("Array with duplicates:", array);
console.log("Array with duplicates removed:", removeDuplicates(array));
