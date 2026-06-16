//when step 2 depends on step 1's result, you must run them sequentially

//Step 1 - Step2

function apiCall(name) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(name, "200 ok")

        }, 1000);
    })
}

async function parallelTest() {
    let [r1, r2, r3] = await Promise.all([
        apiCall("Auth Service"),
        apiCall("User Account Creation"),
        apiCall("Support Page API")
    ]);
    console.log(r1);
    console.log(r2);
    console.log(r3);

}

parallelTest();