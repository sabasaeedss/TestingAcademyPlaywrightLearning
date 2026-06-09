//n =3
// *
// * *
// * * *

let n = 7;

for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
        //  console.log("*");
        //  process.stdout
        row += "*";
    }
    console.log(row.trim());
}

