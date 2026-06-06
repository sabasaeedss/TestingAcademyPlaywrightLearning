//palidrome
const isPalindrome = function (str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    if (str === reversedStr)
        return true;
    return false;
}
console.log(isPalindrome("saba"));
console.log(isPalindrome("madam"));


