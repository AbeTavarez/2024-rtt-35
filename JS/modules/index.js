import {  sayHello as sh, userName  } from "./myModule.js";// multi
import * as MyModule from './myModule.js'; // object multi
import start from './myModule.js'; // export default <--
import getDate from "./myOtherModule.js";

const date = getDate();
console.log(date);


start();

MyModule.sayHello();


function sayHello() {
    console.log('Hello Team!');
    
}

console.log('FROM INDEX::: ', userName);

sayHello()
sh()

export default function main() {
    console.log('main...');
}