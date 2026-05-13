console.log(c);

let c = 10; // This will throw a ReferenceError because 'c' is not hoisted like 'var' variables

console.log(d);
const d = 20; // This will also throw a ReferenceError because 'd' is not hoisted like 'var' variables