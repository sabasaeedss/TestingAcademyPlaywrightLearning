/*
Create a QA-friendly score classifier for practice readiness.

Rules:
- 90 and above => EXCELLENT.
- 75 to 89 => GOOD.
- 50 to 74 => NEEDS_PRACTICE.
- Below 50 => REVISIT.

Interview Hints
Order the conditions from highest to lowest.
Boundary values are the real test here.*/

function classifyJsBasicsScore(score) {
    /*- 90 and above => EXCELLENT.
   - 75 to 89 => GOOD.
   - 50 to 74 => NEEDS_PRACTICE.
   - Below 50 => REVISIT.*/
    let result;
    if (score >= 90)
        result = "EXCELLENT";
    else if (score >= 75 && score < 90) {
        result = "GOOD";
    }
    else if (score >= 50 && score < 75) {
        result = "NEEDS_PRACTICE";
    }
    else
        result = "REVISIT";

    return result;
}
