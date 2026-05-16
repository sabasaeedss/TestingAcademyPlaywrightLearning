// number == string
console.log(3 == "3"); // Output: true (loose equality allows type coercion)

console.log(3 === "3"); // Output: false (strict equality does not allow type coercion)

console.log(0 == false); // Output: true (loose equality allows type coercion)
console.log(0 == ""); // Output: true (loose equality allows type coercion)
console.log(0 === false); // Output: false (strict equality does not allow type coercion)
console.log(0 === ""); // Output: false (strict equality does not allow type coercion)

console.log(null == undefined); // Output: true (loose equality considers null and undefined equal)
console.log(true == 1); // Output: true (loose equality allows type coercion)
console.log(true === 1); // Output: false (strict equality does not allow type coercion)  
console.log(true == "1"); // Output: true (loose equality allows type coercion)