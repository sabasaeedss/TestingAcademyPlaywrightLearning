function questionName(maxAttempts) {

    let attempt = 1;
    let success = false;
    let answer = "";

    do {
        // console.log(`Attempt ${attempt}: Calling API...`);
        const randomValue = Math.random();
        if (randomValue > 0.6) {
            success = true;
            answer += ` Attempt ${attempt}: Success! (randomValue: ${randomValue.toFixed(2)})`;
        } else {
            answer += ` Attempt ${attempt}: Failed (randomValue: ${randomValue.toFixed(2)})`;
        }
        attempt++;
    } while (attempt <= maxAttempts && !success);

    answer += success ? ` API call PASSED after ${attempt} attempt(s)` : "API call failed after 5 attempts.";

    return answer;
}

console.log(questionName(5));
