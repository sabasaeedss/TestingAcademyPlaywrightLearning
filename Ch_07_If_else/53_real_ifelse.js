let username = "dev";
let password = "1234";

let isAccountLocked = true;
//logical operator && (AND) is used to check if both conditions are true
if (username === "dev" && password === "1234") {
    if (isAccountLocked) {
        console.log("Your account is locked. Please contact support.");
    }
    else {
        console.log("Login successful! Welcome, " + username + "!");
    }
} else {
    console.log("Invalid username or password. Please try again.");
}