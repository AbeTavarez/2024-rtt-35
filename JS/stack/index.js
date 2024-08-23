// counter variable
let counter = 0;

function increment() {
  try {
    counter += 1;
    increment();
  } catch (e) {
    console.log(counter);
    console.error(e);
  }
}

// increment();