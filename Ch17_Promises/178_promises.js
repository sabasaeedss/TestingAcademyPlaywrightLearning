let order = new Promise(function (resolve, reject) {
    let foodReady = true;
    if (foodReady) {
        resolve("pizza is delieved");
    }
    else {
        reject("Order canceled");
    }
})

console.log(order);