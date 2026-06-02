function makeRetryTracker(max) {
    let attempts = 0;
    function tryAgain(testName) {
        attempts++;
        if (attempts > max) {
            return `${testName} Execced the attempts ${max}`;
        }
        return `attemp ${attempts}/${max} for ${testName}`;
    }
    return tryAgain;
}

let retry = makeRetryTracker(3);
console.log(retry("login"));
console.log(retry("login"));
console.log(retry("login"));
console.log(retry("login"));
