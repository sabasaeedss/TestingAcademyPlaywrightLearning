function summarizeJsBasicsResults(results) {
    /*Build a compact summary object from test result labels.
    
        Rules:
      - Count total items.
    - Count items containing pass, fail, and skip.
    - Return an object with total, passed, failed, skipped.
    Interview Hints
    Make one normalized array first.
    Return data, not console output.
    Expected: {"total":2,"passed":2,"failed":0,"skipped":0}
    */
    let countPass = results.filter(basic => basic.toLowerCase().trim().includes('pass')).length;
    let countfailed = results.filter(basic => basic.toLowerCase().trim().includes('fail')).length;
    let countSkipped = results.filter(basic => basic.toLowerCase().trim().includes('skip')).length;

    let total = countPass + countfailed + countSkipped;
    return {
        "total": total,
        "passed": countPass,
        "failed": countfailed,
        "skipped": countSkipped
    }
}