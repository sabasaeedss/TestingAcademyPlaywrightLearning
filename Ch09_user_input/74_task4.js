/*Question 4 — Build Health Reporter

Problem: Given the percentage of test cases passed in a CI build, report build health.
100% → Green Build
90–99% → Stable (investigate failures)
70–89% → Unstable
Below 70% → Broken Build (block deployment)
Sample Input/Output:
Input: 95
Output: 🟡 Stable — Investigate failures
Input: 65
Output: 🔴 Broken Build — Block deployment*/

let percentagePassed = 95;
if (percentagePassed === 100) {
    console.log("🟢 Green Build")
} else if (percentagePassed >= 90) {
    console.log("🟡 Stable — Investigate failures")
} else if (percentagePassed >= 70) {
    console.log("🟠 Unstable")
} else {
    console.log("🔴 Broken Build — Block deployment")
}
