let fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits);


let numbers = [3, 1, 4];
numbers.sort();
console.log(numbers);

let nums = [10, 1, 21, 2];
nums.sort();
console.log(nums);
//natural sorting, lexicographic sorting

nums.sort((a, b) => a - b); //ascending order
console.log(nums);

nums.sort((a, b) => b - a); //descending order
console.log(nums);
