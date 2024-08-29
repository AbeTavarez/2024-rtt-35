// import { Stack } from "./Stack.js"; // named exports
import Stack from './Stack.js'; // default exports

// import * as Stack from './Stack.js';

const stack = new Stack();


stack.push(11);
stack.push(35);

console.log(stack.size());

const lastItem = stack.peek();
console.log(lastItem);

