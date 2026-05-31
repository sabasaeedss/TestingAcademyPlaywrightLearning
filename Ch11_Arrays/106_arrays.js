//ways to create an array

let browsers = ["chrome", "firefox"];

//array constructor
let scores = new Array(3); //empty 3 items
let scores2 = new Array(1, 2, 3);

console.log(scores);
console.log(scores2);
console.log(scores.length);

let test = Array.of(10, 20, 30, 40, 50);
console.log(test);

let chars = Array.from("hello"); //converts the string into chars
console.log(chars);

let num = Array.from("2342341");
console.log(num);
