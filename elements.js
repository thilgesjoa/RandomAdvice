// Function to remove duplicate elements from an array
function removeDuplicates(arr) {
    // Create an empty object to store unique elements
    const uniqueElements = {};

    // Iterate through the array and add each element to the object
    arr.forEach(element => {
        uniqueElements[element] = true;
    });

    // Extract the keys (unique elements) from the object and convert them back to an array
    return Object.keys(uniqueElements);
}

// Test case
const numbers = [1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8, 9];
console.log("Array with duplicates:", numbers);
console.log("Array without duplicates:", removeDuplicates(numbers));
