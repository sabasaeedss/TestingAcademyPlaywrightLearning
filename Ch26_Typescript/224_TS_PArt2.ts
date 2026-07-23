let unknown: unknown = "hello";

if (typeof unknown === "string") {
    console.log("hi");
}

let message: string = "hellow";


//function annotations

function greet(name: string): string {
    return `Hell0, ${name}`;
}

//arrow function annotations
const multiply = (a: number, b: number): number => a * b;

//object annotations
let user: { name: string; age: number } = {
    name: "John",
    age: 30
};