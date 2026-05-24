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

function isValidJsBasicsIdentifier(name) {
    // Trim the input first
    const trimmed = name.trim();

    // Must be a non-empty string after trimming
    if (trimmed.length === 0) {
        return false;
    }

    // Must start with a letter, underscore, or dollar sign
    // Remaining characters may include letters, digits, underscore, or dollar sign
    const identifierRegex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
    if (!identifierRegex.test(trimmed)) {
        return false;
    }

    // Reject reserved words (validated separately from the regex)
    const reservedWords = ["let", "const", "var", "class", "function", "return"];
    if (reservedWords.includes(trimmed)) {
        return false;
    }

    return true;
}

// Test cases
console.log(isValidJsBasicsIdentifier("myVar"));      // true
console.log(isValidJsBasicsIdentifier("_private"));   // true
console.log(isValidJsBasicsIdentifier("$element"));   // true
console.log(isValidJsBasicsIdentifier("test123"));    // true
console.log(isValidJsBasicsIdentifier("let"));        // false (reserved word)
console.log(isValidJsBasicsIdentifier("const"));      // false (reserved word)
console.log(isValidJsBasicsIdentifier("1var"));       // false (starts with digit)
console.log(isValidJsBasicsIdentifier(" myVar "));    // true (valid after trim)
console.log(isValidJsBasicsIdentifier(""));           // false (empty)
console.log(isValidJsBasicsIdentifier("my-var"));     // false (invalid character)
