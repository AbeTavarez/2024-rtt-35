// Stack implementation in JavaScript
export default class Stack {
  constructor() {
    this.items = [];
  }
  // Add a new element to the stack
  push(element) {
    this.items.push(element);
  }
  // Remove the top element from the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }
  // View the top element in the stack
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }
  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }
  // Get the size of the stack
  size() {
    return this.items.length;
  }
  // Clear the stack
  clear() {
    this.items = [];
  }
}
