let result = Array.isArray([1, 2, 3]);
console.log(result);

let result2 = Array.isArray("a");
console.log(result2);

//every & some

console.log([80, 90, 85].every(s => s >= 70)); //true (condition should be true for all elements)
console.log([80, 60, 85].every(s => s >= 70)); //false

console.log([200, 201, 203].every(statuscode => statuscode > 200)); //false

console.log([80, 60, 85].some(s => s >= 70)); //true


