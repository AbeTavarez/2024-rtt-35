

export const userName = 'Bill';


export function sayHello() {
    const result = add(2,2)
    console.log(`Hello World! ${result}`);
    
}


function add(a, b) {
    return a + b;
}


export default function start() {
    console.log(`Starting program...`);
    
}


// export {userName, sayHello}