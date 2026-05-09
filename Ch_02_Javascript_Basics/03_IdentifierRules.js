/*
JavaScript Identifier Rules

1. Identifiers must start with a letter (A-Z or a-z), underscore (_), or dollar sign ($).
2. Identifiers cannot start with a digit.
3. After the first character, identifiers may include letters, digits, underscores, or dollar signs.
4. Identifiers cannot contain spaces or punctuation such as hyphens, @, #, %, etc.
5. Identifiers are case-sensitive: firstName and firstname are different.
6. Reserved words cannot be used as identifiers (e.g., var, let, const, function, if, else, for, while, class, return, etc.).
7. Unicode characters are allowed in identifiers, so non-ASCII letters may be used.
8. There is no practical short length limit in modern JavaScript engines, but long identifiers should remain readable.
*/

// Valid identifiers
var a = 10
var A = 20
var _a = 30
var $a = 40
var abc124 = 50
var saba_saeed = 60
var saba$saeed = 70
var firstName = 'John'
var user2 = 'Alice'
var привет = 'hello' // Unicode letters
var café = 'coffee' // Unicode character in identifier

// Invalid identifiers (commented out so the file still runs)
// var 2name = 'no'        // starts with a digit
// var first-name = 'no'    // hyphen not allowed
// var user name = 'no'     // spaces not allowed
// var let = 1              // reserved word
// var function = 2         // reserved word

console.log(a, A, _a, $a, abc124, saba_saeed, saba$saeed)
console.log(firstName, user2, привет, café)