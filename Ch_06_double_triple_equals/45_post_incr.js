let a = 10;
let b = a++;
console.log("Value of a:", a); // Output: Value of a: 11
console.log("Value of b:", b); // Output: Value of b: 10

// explanation: In the post-increment operation (a++), the current value of 'a' is assigned to 'b' before 'a' is incremented. Therefore, 'b' gets the value 10, and then 'a' is incremented to 11.