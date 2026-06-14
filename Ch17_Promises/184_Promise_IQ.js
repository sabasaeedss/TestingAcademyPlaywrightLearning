let p = new Promise(function (resolve, reject) {
    resolve(42);
});

p.then(function (value) {
    console.log("Answer: ", value);
})


///2nd
let p2 = new Promise(function (resolve, reject) {
    reject("Something broke");
});

p2.catch(function (err) {
    console.log("Caught: " + err);
});

//3rd
let p3 = Promise.resolve(5);

p3.then(function (val) {
    return val * 10;
}).then(function (val) {
    console.log("Result: " + val);
})

//4th
Promise.resolve(1)
    .then(function (val) {
        console.log(val);
        return val + 1;
    }).then(function (val) {
        console.log(val);
        return val + 1;
    }).then(function (val) {
        console.log(val);
        return val + 1;
    });

//5th
Promise.resolve("start")
    .then(function (val) {
        console.log(val);
        throw new Error("Broke at step 2");
    }).then(function () {
        console.log("This will not run");
    }).catch(function (err) {
        console.log("Caught: ", err.message)
    });

//6th

Promise.reject("Test failed")
    .then(function (data) {
        console.log("Data: ", data);
    }).catch(function (err) {
        console.log("Error: ", err)
    }).finally(function () {
        console.log("Cleanup done");
    })

//7th
let t1 = Promise.resolve("Login: PASS");
let t2 = Promise.resolve("Search: PASS");
let t3 = Promise.resolve("Logout: PASS");

Promise.all([t1, t2, t3]).then(function (results) {
    console.log(results);
});

//8th

let t11 = Promise.resolve("Login: PASS");
let t22 = Promise.reject("Search: Failed");
let t33 = Promise.resolve("Logout: PASS");

Promise.all([t11, t22, t33]).then(function (results) {
    console.log(results);
}).catch(function (err) {
    console.log("Stopped", err);
})

//9th
Promise.allSettled([
    Promise.resolve("API 200"),
    Promise.reject("API 500"),
    Promise.resolve("API 201"),
]).then(function (results) {
    results.forEach(function (r) {
        let val = r.status === "fulfilled" ? r.value : r.reason;
        console.log(r.status + " -> " + val);
    });
});