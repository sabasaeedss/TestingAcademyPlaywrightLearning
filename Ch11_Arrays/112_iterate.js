let tests = ["login", "checkout", "search"];

for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]);

}

/////
for (test of tests) {
    console.log(test);
}

tests.forEach((test, index) => {
    console.log(test, index);
});

for (let test in tests) {
    console.log(test, "->", tests[test]);
}

console.log("------");

for (let [i, test] of tests.entries()) {
    console.log(i, test);
}