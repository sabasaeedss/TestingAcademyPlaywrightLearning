let a = 10; //global scope
//let is block-scoped, which means it is only accessible within the block in which it is declared, and it cannot be re-declared but can be updated.
console.log(a); // Output: 10

let retryCount = 0; // global scope
retryCount = retryCount + 1; // re-assignment is allowed for let
console.log(retryCount); // Output: 1

let testStatus = "passed"; // global scope

if (testStatus === "passed") {
    let executionTime = 1200;
    console.log(executionTime); // Output: 1200, executionTime is accessible within this block
}

console.log(executionTime); // ReferenceError: executionTime is not defined, because executionTime is block-scoped and not accessible outside the block