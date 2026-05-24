/*✅ Triangle Classifier:

Write a program that classifies a triangle based on its side lengths. Given three input values representing 
the lengths of the sides, determine if the triangle is equilateral (all sides are equal), isosceles 
(exactly two sides are equal), or scalene (no sides are equal). Use an if-else statement to classify the triangle.*/

let x = 5;
let y = 10;
let z = 5;

if (x === y && y === z) {
    console.log("The triangle is equilateral.");
} else if (x === y || y === z || x === z) {
    console.log("The triangle is isosceles.");
} else {
    console.log("The triangle is scalene.");
}