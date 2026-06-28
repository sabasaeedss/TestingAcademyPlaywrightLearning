let attempt = 1;
const maxAttempts = 5;
let success = false;

do {
    console.log(`Attempt ${attempt}: Calling API...`);
    const randomValue = Math.random();
    if (randomValue > 0.6) {
        success = true;
        console.log(`Attempt ${attempt}: Success! (randomValue: ${randomValue.toFixed(2)})`);
    } else {
        console.log(`Attempt ${attempt}: Failed (randomValue: ${randomValue.toFixed(2)})`);
    }
    attempt++;
} while (attempt <= maxAttempts && !success);

console.log(success ? "API call succeeded." : "API call failed after 5 attempts.");
