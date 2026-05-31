let arr = [1, 2, 3];

arr.push(4, 5, 6);

console.log(arr);

//arr.splice(2, 1);
//console.log(arr);


arr.splice(2, 1, 99); //replace the  deleted element with 99
console.log(arr);

arr.splice(2, 2, 99, 100); //replace the  deleted element with 99
console.log(arr);