console.log(0 == ""); // Output: true
console.log(0 == "0"); // Output: true
console.log("" == "0"); // Output: false //Transitive to value but not type 

console.log(0 == false); // Output: true
console.log(null == 0); // Output: false
console.log(null == undefined); // Output: true
console.log(null === undefined); // Output: false   
console.log(undefined == null); // Output: true
