console.log("starting app");

// while this code is waiting to execute, the rest of the code will run.  
// this is an example of non-blocking
setTimeout(() => {
    console.log("Inside of callback");
}, 2000);

setTimeout(() => {
    console.log("This is the second callback");
}, 100);

console.log("finishing app");