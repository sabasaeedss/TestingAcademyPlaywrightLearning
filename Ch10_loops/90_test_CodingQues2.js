/*
Write a validator for names used in helper functions, variables, or test data keys.

Rules:
- Value must be a non-empty string after trimming.
- It must start with a letter, underscore, or dollar sign.
- Remaining characters may include letters, digits, underscore, or dollar sign.
- Reject reserved words used in this chapter: let, const, var, class, function, return.
Interview Hints
Validate reserved words separately from the regex.
Trim before checking the value.*/


/*------------not valid solution----------*/
function isValidJsBasicsIdentifier(name) {
    /*- Value must be a non-empty string after trimming.
    - It must start with a letter, underscore, or dollar sign.
    - Remaining characters may include letters, digits, underscore, or dollar sign.
    - Reject reserved words used in this chapter: let, const, var, class, function, return.*/

    //let, const, var, class, function, return.
    const regex = /let|const|var|class|function|return/g;
    let check = regex.test(name.trim());
    let final;
    if (check === true)
        final = false;

    return final;
}