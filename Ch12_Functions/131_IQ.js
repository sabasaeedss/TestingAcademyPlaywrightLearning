function getStatus(code) {
    if (code >= 200 && code < 300) return "success";
    if (code >= 400 && code < 500) return "client error";
    if (code >= 500) return "server error";
}

getStatus(200);
getStatus(404);
getStatus(500);

function logTest(name) {
    console.log(`Running: ${name}`);
}

let result = logTest("Login");
console.log(result);

greet("alice");

function greet(name) {
    return `Hello ${name}`;


}

sayHi("saba"); //reference error in TDZ
const sayHi = function (name) {
    return `Hello ${name}`;

}