console.log(greeting);
var greeting = "Hello, world!";
console.log(greeting);

// Behind the scenes, JavaScript hoists the variable declaration to the top of the scope, but not the assignment. So the code is interpreted as:

// var greeting; // declaration is hoisted
// console.log(greeting); // Output: undefined, because the variable is declared but not assigned yet
// greeting = "Hello, world!"; // assignment happens here
// console.log(greeting); // Output: Hello, world!