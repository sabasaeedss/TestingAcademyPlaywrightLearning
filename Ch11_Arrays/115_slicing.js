let arr = [1, 2, 3, 4, 5];

console.log(arr.slice(1, 3)); //(start, end-1)

console.log(arr.slice(2, 4)); //(start, end-1)

console.log(arr.slice(2, 5)); //(start, end-1)

console.log(arr.slice(2)); //(start, to end of the array)

console.log(arr.slice(-2)); //(start from the  last, start from second last and till end of the array)

console.log(arr.slice(0)); //(all the elements)


//splice
let arr2 = [10, 20, 30, 40, 50];
let removed = arr2.splice(1, 2);
console.log(removed);
console.log(arr2);

