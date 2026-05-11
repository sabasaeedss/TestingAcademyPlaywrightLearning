let a = 10;
console.log(a); // Output: 10

function printHello() {
    console.log("Hello");
    let a = 20;
    console.log(a); // Output: 20
    if (true) {
        let a = 30;
        console.log(a); // Output: 30, this 'a' is the same as the one declared in the function scope, because var is function-scoped
    }
}
console.log(a); // Output: 10, the global variable 'a' is not affected by the local variable 'a' inside the function
printHello(); // Output: Hello
