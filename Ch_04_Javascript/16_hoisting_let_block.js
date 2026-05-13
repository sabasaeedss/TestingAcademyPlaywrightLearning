let x = "global";
if (true) {
    console.log(x); // Output: "global" (due to scope chain)
    let x = "block";
    console.log(x); // Output: "block"

}