// Function to generate a random color in hexadecimal format
function getRandomColor() {
    // Generate random RGB values
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    // Convert RGB values to hexadecimal format
    const hexRed = red.toString(16).padStart(2, '0');
    const hexGreen = green.toString(16).padStart(2, '0');
    const hexBlue = blue.toString(16).padStart(2, '0');

    // Combine hexadecimal values to form the color code
    const color = `#${hexRed}${hexGreen}${hexBlue}`;

    return color;
}

// Test and display a random color
console.log("Random Color:", getRandomColor());
