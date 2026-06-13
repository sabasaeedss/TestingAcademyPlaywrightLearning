function greetTester(name, callback) {
    console.log("welcome " + name);
    callback();
}

greetTester("Dev", function () {
    console.log("lets start testing");
});

//callback with parameters

function runTest(testName, callback) {
    let status = "PASS";
    callback(testName, status);
}

runTest("Login Test", function (name, result) {
    console.log(name + "->" + result);
})


//sync callback - foreach
let bugs = ["UI glitch", "API timeout", "Wrong redirect"];

bugs.forEach(function (bug, i) {
    console.log("Bug #" + (i + 1) + ": " + bug);
});

console.log("total bugs: " + bugs.length);