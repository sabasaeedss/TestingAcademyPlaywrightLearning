/*You need to create a class with the name of Calculator where you will
 have different methods available for some subtraction, modulus, division, 
 and multiplication. What will happen is you will basically create an 
 object with the two variables. You will basically give the output of 
 some subtraction, modulus, division, and multiplication. */

class Calculator {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    substract() {
        return this.a - this.b;
    }

    addition() {
        return this.a + this.b;
    }

    division() {
        return this.a / this.b;
    }

    modulus() {
        return this.a % this.b;
    }
    multiplication() {
        return this.a * this.b;
    }

}

const c1 = new Calculator(10, 5);
console.log("Substraction " + c1.substract());
console.log("Addition " + c1.addition());
console.log("multiplication " + c1.multiplication());
console.log("division " + c1.division());
console.log("modulus " + c1.modulus());


