//saerchinh & checking 

let url = "https://staging.vwo.com/api/login?retry=true";

//includes
console.log(url.includes("staging"));
console.log(url.includes("production"));

//startswith and endswith

console.log(url.startsWith("https"));
console.log(url.endsWith("true"));

//indexof, lastIndexof
console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));
console.log(url.indexOf("notthere"));

//search
console.log(url.search("login")); //
console.log(url.search(/login/)); //regex (pattern)





