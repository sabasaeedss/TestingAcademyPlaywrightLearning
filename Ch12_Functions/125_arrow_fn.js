//arrow function (ES6)

const greet = function (name1) {
    return "Hi " + name1;
}

let result = greet("saba");
console.log(result);

const greet2 = (name1) => name1;

let result2 = greet2("saba");
console.log(result2);

const doubleIt = n => n * 2;
console.log(doubleIt(2));

const printIt = name => console.log(name);
//console.log(printIt("saba"));
printIt("saaa");

function sayHi() {
    console.log("Hi");
}

const sayHi = () => console.log("hi");

const multipleLines = name => {
    const message = "Hi" + name;
    return message;
}