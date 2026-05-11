var a = 10; //global scope
//var is function-scoped, which means it is accessible throughout the function in which it is declared, and it can be re-declared and updated.
console.log(a); // Output: 10 

function printHello() {
    console.log("Hello");
    var a = 20; //local scope, this variable is different from the global variable 'a'
    console.log(a); // Output: 20
    if (true) {
        var a = 30;
        console.log(a); // Output: 30, this 'a' is the same as the one declared in the function scope, because var is function-scoped
    }
}

printHello(); // Output: Hello

