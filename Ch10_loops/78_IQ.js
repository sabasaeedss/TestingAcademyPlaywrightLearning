for (let saba = 0; saba > 1; saba++) {
    console.log("Iteration:", saba);
} //no output

for (let saba = 0; saba++;) {
    console.log("Iteration:", saba);
} //infinite loop, it will keep printing until we stop it manually.

for (let saba = 0; saba < 18; saba++) {
    if (saba > 15) {
        console.log("Gift from papa, iphone this year" + saba);
    }
    else {
        console.log("No gift this year, keep working hard" + saba);
    }
}

for (let i = 0; i < 1; i++) {
    console.log("Iteration:", i);
}