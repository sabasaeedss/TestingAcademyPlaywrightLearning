let a = 5;
console.log(a++ + ++a - --a + a-- + ++a);
console.log(a);

//answer is 18
//explanation:
//1. a++: use 5, then a becomes 6
//2. ++a: a becomes 7, then use 7
//3. --a: a becomes 6, then use 6
//4. a--: use 6, then a becomes 5
//5. ++a: a becomes 6, then use 6
//So the expression is: 5 + 7 - 6 + 6 + 6 = 18