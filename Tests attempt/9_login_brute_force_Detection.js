/*
Login Brute-Force Detection
Write a JavaScript program that simulates a login system with brute-force detection. The system should lock the account after 3 consecutive failed attempts. Use a do...while loop to process login attempts from an array. Demonstrate var (global counter), let (loop variables), and const (credentials and threshold). Validate using strict equality (===) and logical operators (&&).
Input
Valid: admin@testingacademy.com / Test@1234 Attempts: [wrong, wrong, wrong, correct]
Output
Attempt 1: ❌ FAILED - Strike 1/3 Attempt 2: ❌ FAILED - Strike 2/3 Attempt 3: ❌ FAILED - Strike 3/3 🚨 ACCOUNT LOCKED Attempt 4: 🔒 ACCOUNT LOCKED - Rejected*/
const ATTEMPT_LIMIT = 3;
function questionName(validEmail, validPassword, attemptArray) {
    let attemptCount = 1;
    let index = 0;
    let attemptsResultArray = [];
    let answer = "";
    do {
        if (attemptCount <= ATTEMPT_LIMIT && attemptArray[index].toLowerCase() === "wrong") {
            // attemptCount += attemptCount;
            let a = "failed"
            // console.log(attemptCount);
            attemptsResultArray.push(a);
        }
        else if (attemptCount <= ATTEMPT_LIMIT && attemptArray[index].toLowerCase() === "correct") {
            // attemptCount += attemptCount;
            let a = "passed"
            // console.log(attemptCount);
            attemptsResultArray.push(a);
        }
        else if (attemptCount > ATTEMPT_LIMIT && attemptArray[index].toLowerCase() === "correct") {
            //  attemptCount += attemptCount;
            let a = "rejected"
            // console.log(attemptCount);
            attemptsResultArray.push(a);
        }
        else {
            // attemptCount += attemptCount;
            let a = "rejected"
            // console.log(attemptCount);
            attemptsResultArray.push(a);
        }
        attemptCount++;
        index++;
    } while (index < attemptArray.length)

    for (let a in attemptsResultArray) {
        //  console.log(attemptsResultArray[a]);
        var aa = parseInt(a) + 1;
        //Attempt 1: ❌ FAILED - Strike 1/3 Attempt 2: ❌ FAILED - Strike 2/3 Attempt 3: ❌ FAILED - Strike 3/3 🚨 ACCOUNT LOCKED Attempt 4: 🔒 ACCOUNT LOCKED - Rejected*/
        answer += ` Attempt ${aa}: ${attemptsResultArray[a] === "failed" ? `❌ FAILED - Strike ${aa}/${ATTEMPT_LIMIT}` : attemptsResultArray[a] === "rejected" ? `🚨 ACCOUNT LOCKED Attempt ${aa}: 🔒 ACCOUNT LOCKED - Rejected` : `Passed - Strike ${aa}/${ATTEMPT_LIMIT}`}`;
        //   console.log('/n');
    }
    return answer.trim();
}
console.log(questionName("ss", "ss", ["wrong", "wrong", "wrong", "correct"]));