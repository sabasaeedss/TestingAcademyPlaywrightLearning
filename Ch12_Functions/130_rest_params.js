//Rest of the param
function logResult(suitName, ...result) {
    console.log(suitName);
    console.log(result);
}

logResult("Login Test", 1, 2, 3);
logResult("Reg", "Hello", "saba");