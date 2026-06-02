//pure function
// always returns the same output for thr same input, and has no side effects
//predictable output
function calculatePassRate(total, passed) {
    return (passed / total * 100).toFixed(2);
}

console.log(calculatePassRate(10, 7));
console.log(calculatePassRate(10, 7));

//impure functions - depends on external state

function isPassing(score) {
    return score >= threshold;
}

let threshold = 50;
console.log(isPassing(threshold));


