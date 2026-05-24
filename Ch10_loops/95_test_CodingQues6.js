function countPassingJsBasicsChecks(results) {
    /*Count how many check result strings represent a pass.
    
    Rules:
    - Treat matching as case-insensitive.
    - A passing item contains the word "pass".
    - Return only the count.
    Normalize each result before checking.
    filter().length is concise here.*/
    let count = results.filter(basic => basic.toLowerCase().trim().includes('pass')).length;

    return count;

}