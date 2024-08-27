const error = false;

// create a new promise
const myPromise = new Promise((resolve, reject) => {
  if (!error) {
    setTimeout(() => {
      // doing some data fetching....
      resolve("We got some data!!");
    }, 1000);
  } else {
    reject("Error fetching data");
    // throw new Error("Error fetching data");
  }
});

// myPromise
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error))
//   .finally(() => console.log("Done!"));

// Create a Promise that resolves after one second.
const myPromise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Guess this worked!");
  }, 1000);
});

// Add some then() methods to handle additional tasks.
myPromise1
  .then((x) => x + " Again?") // fetch user info
  .then((x) => x + " Third time!") // fetch user fav movies
  .then((x) => x + " Promises are cool.") // games
  .then((x) => console.log(x)) // display data on user screen
  .catch((err) => {
    console.error(err);
  });

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "foo");
reject('ERROR!!!!')
});

const promise4 = () => {
  throw new Error("Error");
};

Promise.all([promise1, promise2, promise3, promise4])
  .then((values) => {
    console.log(values);
  })
  .catch((e) => console.log(e));
