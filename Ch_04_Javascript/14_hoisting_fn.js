function getUserStatus() {
    console.log(status); // Output: undefined, because the variable declaration is hoisted but not the assignment
    var status = "Active";
    console.log(status); // Output: Active, because the variable is now assigned a value
}

getUserStatus();