// Define a TodoList class
class TodoList {
    constructor() {
        this.tasks = [];
    }

    // Method to add a task
    addTask(task) {
        this.tasks.push(task);
    }

    // Method to delete a task by its index
    deleteTask(index) {
        if (index >= 0 && index < this.tasks.length) {
            this.tasks.splice(index, 1);
        } else {
            console.log("Invalid task index.");
        }
    }

    // Method to display all tasks
    displayTasks() {
        if (this.tasks.length === 0) {
            console.log("Todo list is empty.");
        } else {
            console.log("Tasks in Todo list:");
            this.tasks.forEach((task, index) => {
                console.log(`${index + 1}. ${task}`);
            });
        }
    }
}

// Create an instance of TodoList
const todoList = new TodoList();

// Add some tasks
todoList.addTask("Complete JavaScript project");
todoList.addTask("Buy groceries");
todoList.addTask("Call mom");

// Display tasks
todoList.displayTasks();

// Delete a task
todoList.deleteTask(1);

// Display tasks after deletion
todoList.displayTasks();
