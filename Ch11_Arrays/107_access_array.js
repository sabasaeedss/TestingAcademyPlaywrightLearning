let statuses = ["pass", "fail", "skip"];

console.log(statuses[0]);
console.log(statuses[2]);

console.log(statuses.at(-1));
console.log(statuses.at(-2));
console.log(statuses.at(-4));
console.log(statuses[-1]); //does not work, gives undefined


//Modify
statuses[1] = "Blocked";
console.log(statuses);