/*Create a reusable label normalizer for JavaScript QA utilities.

Rules:
- Trim leading and trailing spaces.
- Convert text to lowercase.
- Replace non-alphanumeric groups with a single hyphen.
- Prefix the result with "js-basic-".

Interview Hints
String normalization is common in test-id generation.
Use regex replacement instead of many manual replace calls.*/


function normalizeJsBasicsLabel(label) {
    let trim = label.trim();
    let replaceHyphen = trim.replace(/[^a-zA-Z0-9]+/g, '-');
    let lowercase = replaceHyphen.toLowerCase();
    let result = `js-basic-${lowercase}`;
    let result2 = result.replace(/[^a-zA-Z0-9]+/g, '-');
    let final = result2.at(-1) === "-" ? result2.slice(0, -1) : result2;
    return final;
}