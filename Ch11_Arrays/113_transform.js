let scores = [45, 82, 91, 60, 73];

// map - transform every element, return a new array
let grades = scores.map(s => s > 70 ? "pass" : "fail");
console.log(grades);

//same can be acheived with for loop

//filter - keeps elements that pass a test

let passing = scores.filter(s => s > 70);
console.log(passing);

//reduce - accumulates to a single value

let total = scores.reduce((a, b) => a + b, 0);
console.log(total);

let nested = [[1, 2], [3, 4], [5, 6]];
console.log(nested.flat());