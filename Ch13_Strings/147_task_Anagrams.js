const arraysEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
    return arr1.every((val, index) => val === arr2[index]);
};

const anagram = function (str1, str2) {
    if (str1.length != str2.length) {
        return false;
    }
    let str1Transformed = str1.toLowerCase().split("").sort();
    let str2Transformed = str2.toLowerCase().split("").sort();
    //console.log(str1Transformed);
    // console.log(str2Transformed);
    let result = arraysEqual(str1Transformed, str2Transformed);
    return result;

    // for (let i = 0; i < str1Transformed.length; i++) {
    // console.log(str1Transformed[i]);
    // console.log(str2Transformed[i]);
    // if (str1Transformed[i] !== str2Transformed[i]) {
    //   console.log(str1Transformed[i]);
    //   console.log(str2Transformed[i]);

    // return false;
    //   }
    //   else {
    //       console.log("Con")
    //    continue;
    //  }
    //  return true;
    //  }
    /*  if (str1.toLowerCase().split(",").sort() == str2.toLowerCase().split(",").sort()) {
          console.log(str1.toLowerCase().split("").sort());
          console.log(str2.toLowerCase().split("").sort());
          return true;
      }*/
    //  return false;

}

console.log(anagram("eat", "tea"));
console.log(anagram("From", "Form"));
console.log(anagram("North", "Thorn"));
console.log(anagram("North", "Thrrn"));
console.log(anagram("Cheat", "Teach"));



