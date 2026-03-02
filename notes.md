.js  , i havent incorporate any typescript. 

.js or .tsx 

1. callback hell vs promise chaining

promise chaining is better than callback

component re rendering 


-> change in props
change in state 
change in parent 


callback functions, timer , promises are eg of async events.


async running in leaner pattern or in queue one after one .. we use promises chaining.

// Promises / Async & Await - promise chaining
 
//      Synchronous & Asynchronous
 
// callback functions,timers,promises - eg's of Async events
 
setInterval(() => {
  console.log("user registered");
}, 3000);
 
setInterval(() => {
  console.log("paid remuneration");
}, 3000);
 
console.log("hi");
 
console.log("hello");
 
//     Sync - Que - promise chaining
 
//      Task1 - registering employee
 
//      Task2 - providing access
 
//      Task3 - plan training
 
//      Task4 - assign work
 
//      Task5 - process remuneration
 
// useEffect() - will use promises
 
// useState()
 
// useCallBack()
 
// useRef()
 
// useMemo()
 
// etc