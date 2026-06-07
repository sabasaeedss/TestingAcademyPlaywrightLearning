const user = {
    name: "JOhn",
    age: 30,
    email: "john@example.com"
};

console.log(user);
console.log(user.name);
console.log(user["age"]);

///dynamic property access
const key = "age";
console.log(user[key]);

let obj = { name: "Login" };
console.log(Object.getOwnPropertyDescriptor(obj, "name"));