class Kitty {
    constructor(name, color, age) {
        this.name = name;
        this.color = color;
        this.age = age;
    }

    introduce() {
        console.log(`Meow! My name is ${this.name}. I am a ${this.color} kitty and I am ${this.age} years old.`);
    }
}

// Create a new Kitty object
const myKitty = new Kitty('Whiskers', 'gray', 2);

// Introduce the Kitty
myKitty.introduce();
