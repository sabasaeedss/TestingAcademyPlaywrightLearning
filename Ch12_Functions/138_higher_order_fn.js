// higher order function
// a function that takes a function as argument or returns a funciton

function runWithLogin(testFn, testName) {
    console.log(`Starting: ${testName}`);
    let result = testFn();
    console.log(`Finished: ${testName} - ${result}`);
    return result;

}
function loginTest() {
    return "pass";
}

function loginTestFailed() {
    return "fail";
}

runWithLogin(loginTest, "Login Test");
runWithLogin(loginTestFailed, "Login Test");

