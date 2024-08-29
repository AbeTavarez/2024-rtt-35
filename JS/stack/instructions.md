### Lab Activity: Implementing a Simple Stack in JavaScript

**Objective:** 
In this lab, students will learn how to create and work with classes in JavaScript by implementing a simple stack data structure. A stack is a data structure that follows the Last In, First Out (LIFO) principle, where the last element added is the first one to be removed.


### Part 1: Setting Up the Environment

**Create a New JavaScript File:**
Open your code editor.
Create a new file named `stack.js`.

**Add Boilerplate Code:**
Start by adding the following boilerplate code to the file:
   ```javascript
   // Stack implementation in JavaScript
   class Stack {
       constructor() {
           this.items = [];
       }
       // Add a new element to the stack
       push(element) {
           // Your code here
       }
       // Remove the top element from the stack
       pop() {
           // Your code here
       }
       // View the top element in the stack
       peek() {
           // Your code here
       }
       // Check if the stack is empty
       isEmpty() {
           // Your code here
       }
       // Get the size of the stack
       size() {
           // Your code here
       }
       // Clear the stack
       clear() {
           // Your code here
       }
   }
   // Test the Stack class
   const stack = new Stack();
   ```

### Part 2: Implementing the Stack Methods

**Implement the `push` Method:**
**Instructions:** The `push` method adds a new element to the top of the stack.
**Code:**
   ```javascript
   push(element) {
       this.items.push(element);
   }
   ```
**Explanation:** The `push` method uses the `push` method of the array to add the element to the stack.
**Implement the `pop` Method:**
**Instructions:** The `pop` method removes the top element from the stack and returns it.
**Code:**
   ```javascript
   pop() {
       if (this.isEmpty()) {
           return "Stack is empty";
       }
       return this.items.pop();
   }
   ```
**Explanation:** The `pop` method checks if the stack is empty using the `isEmpty` method. If not, it removes and returns the top element using the array's `pop` method.
**Implement the `peek` Method:**
**Instructions:** The `peek` method returns the top element of the stack without removing it.
**Code:**
   ```javascript
   peek() {
       if (this.isEmpty()) {
           return "Stack is empty";
       }
       return this.items[this.items.length - 1];
   }
   ```
**Explanation:** The `peek` method returns the last element of the `items` array, representing the top of the stack.
**Implement the `isEmpty` Method:**
**Instructions:** The `isEmpty` method checks if the stack is empty and returns `true` or `false`.
**Code:**
   ```javascript
   isEmpty() {
       return this.items.length === 0;
   }
   ```
**Explanation:** This method returns `true` if the `items` array has a length of 0, indicating the stack is empty.
**Implement the `size` Method:**
**Instructions:** The `size` method returns the number of elements in the stack.
**Code:**
   ```javascript
   size() {
       return this.items.length;
   }
   ```
**Explanation:** The `size` method returns the length of the `items` array, which is the number of elements in the stack.
**Implement the `clear` Method:**
**Instructions:** The `clear` method removes all elements from the stack.
**Code:**
   ```javascript
   clear() {
       this.items = [];
   }
   ```
**Explanation:** The `clear` method sets the `items` array to an empty array, effectively removing all elements from the stack.

### Part 3: Testing the Stack
**Test the Stack Implementation:**
**Instructions:** Test each method you implemented by adding some code at the bottom of the `stack.js` file.
   ```javascript
   stack.push(10);
   stack.push(20);
   stack.push(30);
   console.log(stack.peek()); // Expected output: 30
   console.log(stack.pop());  // Expected output: 30
   console.log(stack.peek()); // Expected output: 20
   console.log(stack.isEmpty()); // Expected output: false
   console.log(stack.size()); // Expected output: 2
   stack.clear();
   console.log(stack.isEmpty()); // Expected output: true
   ```
**Run the Code:**
**Instructions:** Run your `stack.js` file using Node.js or in a browser's console to verify the output.
**Expected Outcome:** Ensure that the output matches the expected output after each operation.

### Part 4: Reflecting on the Lab
**Reflection Questions:**
**Question 1:** How does the `stack` class make it easier to work with stacks compared to using arrays directly?
**Question 2:** What real-world scenarios can you think of where a stack would be useful?
**Question 3:** How would you modify the stack implementation if you wanted to limit the size of the stack?
