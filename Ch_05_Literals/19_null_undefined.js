// Null vs Undefined in JavaScript

/*
  undefined: Variable declared but not assigned a value
  null: Intentional absence of value (set by programmer)
*/

// 1. undefined - variable declared but not initialized
let a;
console.log(a); // undefined
console.log(typeof a); // "undefined"

// 2. null - explicit intentional absence
let b = null;
console.log(b); // null
console.log(typeof b); // "object" (known quirk in JS)

// 3. Comparing null and undefined
console.log(a == b); // true (loose equality)
console.log(a === b); // false (strict equality)

// 4. Function returns undefined when no return
function noReturn() {}
console.log(noReturn()); // undefined

// 5. Object property that doesn't exist
let obj = {};
console.log(obj.name); // undefined

// 6. Explicitly setting to null (e.g., clearing a reference)
let user = { name: "John" };
user = null; // clearing the object reference
console.log(user); // null

// 7. Difference in arithmetic
console.log(null + 5); // 5 (null coerces to 0)
console.log(undefined + 5); // NaN (undefined coerces to NaN)
