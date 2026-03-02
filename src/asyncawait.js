async function readFile1() { // Async function is a function that returns a promise. it allows us to write asynchronous code in a synchronous-like manner, making it easier to read and maintain. with async/await, we can avoid the callback hell and make our code more concise and easier to understand.
  return Promise.resolve(100); //
}


async function readFile() {
    return "Hello World";
}

readFile1().then((x) => {
  console.log(x);
});

async function readfile2() {
    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done");
        }, 3000);   
});


let p2 = await p1; // p1.then() - waits for p1 to settle before moving to the next line of code. this is the syntax of async/await where we can use await keyword to wait for a promise to settle before moving to the next line of code. this makes our code more readable and easier to understand as it looks like synchronous code but it is actually asynchronous.

console.log('from p2'+ p2);

let p3 = await p2;

console.log('from p3'+ p3);
}

//async await is promise chaining in a more readable way. it allows us to write asynchronous code in a synchronous-like manner, making it easier to read and maintain. with async/await, we can avoid the callback hell and make our code more concise and easier to understand.

let t1 = readFile1().then((x) => {
  console.log(x);
  return x + 100;
});

let t2 = t1.then((y) => {
  console.log(y);
  return y + 100;
});