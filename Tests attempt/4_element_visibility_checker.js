/*
Element Visibility Checker
In UI automation (Cypress/Playwright), you often need to validate element states before interacting with them. Write a JavaScript program that checks an element's properties (isPresent, isDisplayed, isEnabled) and prints the appropriate action a QA engineer should take. Use strict equality (===), logical operators (&&, ||), and the ternary operator for severity level.

States: READY (all true), DISABLED (present+displayed but not enabled), HIDDEN (present but not displayed), NOT FOUND (not present).
Severity: CRITICAL (not present), WARNING (not displayed or not enabled), OK (all good).
Input
isPresent = true, isDisplayed = true, isEnabled = false
Output
Status: DISABLED Severity: WARNING Action: Element is visible but disabled. Wait for enable state or check preconditions.
*/

function questionName(isPresent, isDisplayed, isEnabled) {
    let answer = "";
    let severity = "";
    let status = "";
    if (!isPresent) {
        severity = "CRITICAL";
        status = 'NOT FOUND'
    }
    else {
        if (!isDisplayed) {
            severity = "WARNING";
            status = "HIDDEN";
        }
        else {
            if (isDisplayed && !isEnabled) {
                severity = "WARNING";
                status = "DISABLED ";

            }
            else {
                severity = "OK";
                status = "READY ";

            }
        }

    }
    answer = `Status: ${status} Severity: ${severity}`;
    return answer;
}
console.log(questionName(false, true, true));
console.log(questionName(true, true, true));
console.log(questionName(true, false, false));
console.log(questionName(true, true, false));

