
// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements at positions i and j
    }
    return array;
}

// Test the shuffleArray function
const originalArray = [1, 2, 3, 4, 5];
console.log("Original Array:", originalArray);

const shuffledArray = shuffleArray(originalArray.slice()); // Clone the original array
console.log("Shuffled Array:", shuffledArray);
