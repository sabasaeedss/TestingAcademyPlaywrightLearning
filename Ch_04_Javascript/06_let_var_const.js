var v = 10;
let l = 20;
const c = 30;

var browser = "chrome";
var browser = "firefox"; // re-declaration is not allowed for var
browser = "edge"; // re-assignment is allowed for var

var testCases = ["login", "signup", "logout"];

for (var i = 0; i < testCases.length; i++) {
    console.log(testCases[i]);
}

console.log(i); // i is accessible outside the loop because var is function-scoped

function test() {
    console.log("Hi"); // var is hoisted, so it can be accessed before declaration
}

test();
test();