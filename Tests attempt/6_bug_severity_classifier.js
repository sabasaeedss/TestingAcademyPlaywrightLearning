/*
Bug Severity Classifier
As a QA engineer, classify bugs based on two factors: frequency ("always", "often", "rarely") and impact ("blocker", "major", "minor"). Write a JavaScript program using nested if-else that prints the bug severity level.

Classification Matrix:
- always + blocker → P0 | always + major → P1 | always + minor → P2
- often + blocker → P1 | often + major → P2 | often + minor → P3
- rarely + blocker → P2 | rarely + major → P3 | rarely + minor → P4
Input
frequency = "always", impact = "blocker"
Output
Bug Title: Checkout page crashes on applying coupon Frequency: always Impact: blocker Severity: P0 - Critical: Stop release immediately
*/

function questionName(frequency, impact) {

  let answer = "";
  let severity = "";
  if (frequency === "always") {
    if (impact === "blocker") {
      severity = "P0 - Critical: Stop release immediately";
    }
    else if (impact === "major") {
      severity = "P1 - High: Needs fast resolution";
    }
    else if (impact === "minor") {
      severity = "P2 - Medium: Prioritized for the next sprint";
    }
  }
  else if (frequency === "often") {
    if (impact === "blocker") {
      severity = "P1 - High: Needs fast resolution";
    }
    else if (impact === "major") {
      severity = "P2 - Medium: Prioritized for the next sprint";
    }
    else if (impact === "minor") {
      severity = "P3 - Low:  Scheduled for resolution during regular work hours when convenient.";
    }
  }
  else if (frequency === "rarely ") {
    if (impact === "blocker") {
      severity = "P2 - Medium: Prioritized for the next sprint";
    }
    else if (impact === "major") {
      severity = "P3 - Low:  Scheduled for resolution during regular work hours when convenient.";
    }
    else if (impact === "minor") {
      severity = "P4 - Trivial:  Response: Put into the backlog to be fixed whenever resources permit.";
    }
  }

  answer = `Bug Title: Testing Frequency: ${frequency} Impact: ${impact} Severity: ${severity}`;


  return answer;
}

console.log(questionName("always", "major"));