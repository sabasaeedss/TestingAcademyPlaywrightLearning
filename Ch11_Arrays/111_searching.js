let results = ["pass", "fail", "pass", "error", "fail"];

//indexof - returns first index of -1 if not found

console.log(results.indexOf("fail"));
console.log(results.indexOf("skip"));

console.log(results.lastIndexOf("fail"));

console.log(results.includes("fail")); //true
console.log(results.includes("skip")); //false


let nums = [10, 25, 30, 45];
console.log(nums.find(x => x > 20));
console.log(nums.findIndex(x => x > 20));

console.log(nums.findLast(x => x > 20));
console.log(nums.findLastIndex(x => x > 20)); 