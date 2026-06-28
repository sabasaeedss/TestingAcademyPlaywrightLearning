/*Test Case Result Counter
After a test suite runs, you receive an array of test results(strings: "pass", "fail", "skip").Write a JavaScript program using a for loop that counts how many tests passed, failed, and were skipped.Print a test report with total tests, counts, pass rate percentage, and a verdict(all passed → ready for release, ≤2 failures → review, > 2 failures → block release).
Input
testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"]
Output
Total Tests : 8 Passed: 5 Failed: 2 Skipped: 1 Pass Rate: 62.50% VERDICT: Minor failures. Review before release.
*/

function questionName(input) {
    let answer = '';
    if (input.length > 0) {
        let passed = 0;
        let failed = 0;
        let skipped = 0;
        for (let i = 0; i < input.length; i++) {
            if (input[i] === "pass") {
                passed += 1;
            }
            else if (input[i] === "fail") {
                failed += 1;
            }
            if (input[i] === "skip") {
                skipped += 1;
            }
        }
        answer = `Total Tests: ${input.length} Passed: ${passed} Failed: ${failed} Skipped: ${skipped} Pass Rate: ${((passed / input.length) * 100).toFixed(2)} VERDICT: ${passed === input.length ? "ready for release" : failed <= 2 ? "review" : failed > 2 ? "block release" : ""}`;
    }
    return answer;
}

let resultfn = questionName(["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"]);
console.log(resultfn);