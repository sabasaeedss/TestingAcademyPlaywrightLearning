let str = "Hello, World!";
console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.trim());

console.log(str.trimStart());
console.log(str.trimEnd());

let msg = "Test: FAIL. Retry: FAIL.";
console.log(msg.replace("FAIL", "PASS")); //will only replace 1st occurance

console.log(msg.replaceAll("FAIL", "PASS")); //will replace all occurances

console.log(msg.replace(/FAIL/g, "PASS")); //will replace all occurances

//concatenation

console.log("Hello" + " " + "World");
console.log("Hellow".concat(" ", "World"));
console.log(`${"Hellow"} ${"World"}`);

console.log("pass,fail,skip".split(","));

console.log("pass,fail,skip".split(",").join(" "));

let parts = ["2024", "03", "00"];
let date = parts.join("-");
console.log(date);
