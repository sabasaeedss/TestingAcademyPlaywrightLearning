/*Rules:
- Normalize input by trimming and lowercasing.
- Return the mapped meaning when the term exists.
- Return "unknown" for unmapped terms.

Interview Hints
Object lookup is cleaner than a long if/else chain for fixed mappings.
Normalize the input first.*/

function getJsBasicsKeywordMeaning(term) {
    /*JavaScript basics, engine setup, comments, identifiers, literals, null, undefined, and equality.
     Normalize input by trimming and lowercasing.
  - Return the mapped meaning when the term exists.
  - Return "unknown" for unmapped terms.*/
    let normalize = term.toLowerCase().trim();

    const lookup = {
        "node": "runtime",
        "v8": "engine",
        "npm": "package-manager",
    };

    const result = lookup[normalize];
    if (result !== undefined)
        return result;
    else return "unknown";
}