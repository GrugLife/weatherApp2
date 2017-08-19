var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number'){
                resolve(a + b);
            } else {
                reject('Arguments must be numbers');
            }          
        }, 1500);
    });
};

// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve("Hey, it worked");
//         reject("Eat dick it didn't work");
//     }, 2500);
// });

// somePromise.then((message) => {
//     console.log("Success", message);
// }, (err) =>{
//     console.log("error", err);
// })

asyncAdd(5, 6).then((res) => {
    console.log('Result: ', res);
    return asyncAdd(res, 33);
}).then((res) => {
    console.log("result: ", res);
}).catch((err) => {
    console.log(err);
});