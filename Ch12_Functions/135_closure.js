function outer() {
    let message = "hellow";
    console.log("outer called");

    function inner() {
        console.log(message);
    }
    return inner;  // returninh function
}

let fn_inner = outer(); //return inner function
//console.log(outer());
fn_inner(); //calling inner;