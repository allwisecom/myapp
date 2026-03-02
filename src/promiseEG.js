// This code demonstrates how to use Promises in Node.js to read a file asynchronously.
//promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows us to write asynchronous code in a more synchronous-like manner, making it easier to read and maintain.

let fs = require('fs'); // to load the file system module

function readFile(filePath) {
    return new Promise((resolve, reject) => { //internal state of the promise is pending
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                reject(err); //if there is an error, the promise is rejected with the error
            } 
            resolve(data); //if the file is read successfully, the promise is resolved with the file content
        });
    });
}

let t1 = readFile('example.txt'); //thenable shows the promise is resolved and we can access the data. this method returns promise object and we can chain the then and catch methods to handle the resolved value or any error that occurs during the asynchronous operation.
    
//handles the resolved value of the promise
t1.then((data) => {
        console.log('File content:', data);
    })


//handle error only

//handles only error if there is any error in the promise
t1.then(null, (err) => {
        console.log('Error reading file:', err);
    });

//when promise is rejected, the error is passed to the catch method.
t1.catch((err) => {
    console.log('Error reading file:', err);
});

let t2 = t1.then((data) => {
    console.log('File content in t2:', data);
    return data.toUpperCase(); //returns a new promise that resolves to the uppercase version of the file content
});

let t3 = t2.then((upperData) => {
    console.log('Uppercase File content in t3:', upperData);
}).catch((err) => {
    console.log('Error in t3:', err);
});

//promise chaining allows us to perform a sequence of asynchronous operations in a more readable and maintainable way. Each then method returns a new promise, which allows us to chain multiple then calls together. In this example, t2 will only execute after t1 has resolved, and t3 will only execute after t2 has resolved.

//till t1 settles t2 will not intiate and till t2 settles t3 will not initiate. this is the chaining of promises where each promise waits for the previous one to settle before executing its callback function.