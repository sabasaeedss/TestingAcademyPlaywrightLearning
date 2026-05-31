let a = [1, 2];
let b = [3, 4];
//let c = a + b;
let c = a.concat(b);
console.log(c);

//spead (modern way)

let d = [...a, ...b]; //3 dots represents all the elements of a and all the elements of b array
console.log(d);

//join
let s = ["pass", "fail", "skip"].join(" | ");
console.log(s);