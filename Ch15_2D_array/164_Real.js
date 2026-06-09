let testMatrix = [
    ["login", "pass", 200],
    ["checkout", "fail", 404],
    ["search", "pass", 180]
];

//how many test cases have we executed
//how manay test cases are passed


//for (let i = 0; i < testMatrix.length; i++) {
//   for (let j = 0; j < testMatrix[i].length; j++) {
//       console.log(testMatrix[i][j]);
//   }
//}

for (let row of testMatrix) {
    for (let cell of row) {
        console.log(cell + " ");
    }
    console.log();
}

testMatrix.forEach(row => {
    row.forEach(cell => console.log(cell + " "));
    console.log();
});