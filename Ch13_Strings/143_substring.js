let str = "login_test_pass_001";

console.log(str.slice(0, 5));
console.log(str.slice(11));
console.log(str.slice(-3));

let testNumber = str.slice(-3);
console.log(testNumber);

//substring (start,end), no negative index treats as 0
console.log(str.substring(6, 10));
console.log(str.at(0));
