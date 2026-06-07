let student1 = { name: "saba", age: 33 };
let student2 = { name: "saba" };


//key is not in double quotes

let a = { status: "pass" };
console.log(a.status);
console.log(a["status"]);

let b = a;
console.log(b.status);
b.status = "fail";

console.log(b.status);
console.log(a.status);

if (a === b) {
    console.log("True");// true because same references
}
else {
    console.log("false");
}