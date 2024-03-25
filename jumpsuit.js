// Define a clown object
const clown = {
    name: 'Bubbles',
    age: 32,
    favoriteColor: 'red',
    outfit: 'colorful jumpsuit',
    hasMakeup: true,

    // Method to introduce the clown
    introduce: function() {
        console.log(`Hi there! My name is ${this.name}. I'm ${this.age} years old.`);
        console.log(`My favorite color is ${this.favoriteColor}, and I'm wearing a ${this.outfit}.`);
    },

    // Method to perform a clown trick
    performTrick: function(trick) {
        console.log(`${this.name} is performing a ${trick} trick!`);
    },

    // Method to apply clown makeup
    applyMakeup: function() {
        if (!this.hasMakeup) {
            console.log(`${this.name} is applying clown makeup.`);
            this.hasMakeup = true;
        } else {
            console.log(`${this.name} already has clown makeup on.`);
        }
    }
};

// Test the clown object
clown.introduce();
clown.performTrick("juggling");
clown.applyMakeup();
clown.applyMakeup();
