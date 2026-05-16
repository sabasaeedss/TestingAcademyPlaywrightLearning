// == vs === Examples
// == (loose equality) - performs type coercion before comparison
// === (strict equality) - compares both value and type without coercion

// Basic comparison
console.log("Basic Comparison:");
console.log("5 == 5:", 5 == 5);       // true
console.log("5 === 5:", 5 === 5);     // true
console.log("5 == '5':", 5 == '5');   // true (string '5' is coerced to number 5)
console.log("5 === '5':", 5 === '5'); // false (different types: number vs string)

// Null and Undefined
console.log("\nNull and Undefined:");
console.log("null == undefined:", null == undefined);   // true (special case)
console.log("null === undefined:", null === undefined); // false (different types)
console.log("null == null:", null == null);             // true
console.log("undefined == undefined:", undefined == undefined); // true

// Boolean comparisons (tricky!)
console.log("\nBoolean Comparisons:");
console.log("true == 1:", true == 1);     // true (true coerced to 1)
console.log("true === 1:", true === 1);   // false
console.log("false == 0:", false == 0);   // true (false coerced to 0)
console.log("false === 0:", false === 0); // false
console.log("true == '1':", true == '1');   // true
console.log("false == '':", false == '');   // true
console.log("false == '0':", false == '0'); // true

// Empty string and zero
console.log("\nEmpty String and Zero:");
console.log("'' == 0:", '' == 0);     // true (empty string coerced to 0)
console.log("'' === 0:", '' === 0);   // false
console.log("' ' == 0:", ' ' == 0);   // true (whitespace string coerced to 0)
console.log("' ' === 0:", ' ' === 0); // false

// Arrays and Objects (reference vs value)
console.log("\nArrays and Objects:");
console.log("[] == false:", [] == false);     // true (array coerced to empty string, then to 0, then to false)
console.log("[] === false:", [] === false);   // false
console.log("[1,2] == '1,2':", [1,2] == '1,2');   // true (array coerced to string '1,2')
console.log("[1,2] === '1,2':", [1,2] === '1,2'); // false

// Objects
let obj1 = { a: 1 };
let obj2 = { a: 1 };
let obj3 = obj1;
console.log("\nObjects:");
console.log("obj1 == obj2:", obj1 == obj2);   // false (different references)
console.log("obj1 === obj2:", obj1 === obj2); // false (different references)
console.log("obj1 == obj3:", obj1 == obj3);   // true (same reference)
console.log("obj1 === obj3:", obj1 === obj3); // true (same reference)

// NaN (special case)
console.log("\nNaN:");
console.log("NaN == NaN:", NaN == NaN);     // false (NaN is never equal to anything, even itself)
console.log("NaN === NaN:", NaN === NaN);   // false
console.log("isNaN(NaN):", isNaN(NaN));     // true (use this to check for NaN)
console.log("Number.isNaN(NaN):", Number.isNaN(NaN)); // true (modern way)

// Best practice recommendation
console.log("\nBest Practice: Always use === (strict equality)");
console.log("It avoids unexpected type coercion and makes your code more predictable.");

// Summary of confusing cases to remember
console.log("\n=== Confusing Cases Summary ===");
console.log("null == undefined ->", null == undefined, "(true, but null !== undefined)");
console.log("'' == 0 ->", '' == 0, "(true, empty string equals zero)");
console.log("'0' == 0 ->", '0' == 0, "(true, string zero equals number zero)");
console.log("[] == false ->", [] == false, "(true, empty array equals false)");
console.log("[] == ![] ->", [] == ![], "(true, because ![] is false and [] == false)");
console.log("NaN == NaN ->", NaN == NaN, "(false, NaN never equals anything)");
