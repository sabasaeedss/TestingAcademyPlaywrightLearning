
//   *

//  ***

// ***** 

let rows = 3;
let cols = 5;
// Create 2D array filled with spaces
let arr = Array.from({ length: rows }, () => Array(cols).fill(' '));

for (let i = 0; i < rows; i++) {
    let start = rows - 1 - i;
    let end = rows - 1 + i;

    for (let j = start; j <= end; j++) {
        arr[i][j] = '*';
    }
}

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        // console.log(arr[i][j]);
        process.stdout.write(arr[i][j] + " ");

    }
    console.log();
}