//creating strings

//double string
let a = "hellow";

//single quote
let b = 'world';

//template literal
let name = "saba";
let message = `Hello , ${name}: 2+2 = ${2 + 2}`;
console.log(message);

//multiline
let report = `
Test: Login
Status: Pass
Duration: 320ms
;`

//String interface
console.log(String(200));
console.log(String(true));
console.log(String(null));
console.log(String([1, 2]));