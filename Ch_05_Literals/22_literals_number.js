// JavaScript Number Literals

// 1. Decimal Integers (Base 10)
let decimal = 42;
console.log("Decimal:", decimal);

// 2. Floating-Point Numbers
let float = 3.14;
console.log("Float:", float);

let floatWithoutLeading = .5;   // Valid but not recommended
let floatWithoutTrailing = 5.;  // Valid but not recommended
console.log(".5 =", floatWithoutLeading, ", 5. =", floatWithoutTrailing);

// 3. Exponential Notation
let exp1 = 3.5e5;   // 3.5 * 10^5 = 350000
let exp2 = 3.5e-5;  // 3.5 * 10^-5 = 0.000035
console.log("3.5e5 =", exp1, ", 3.5e-5 =", exp2);

// 4. Binary Literals (Base 2) - prefix 0b or 0B
let binary = 0b1010; // 10 in decimal
console.log("Binary 0b1010 =", binary);

// 5. Octal Literals (Base 8) - prefix 0o or 0O
let octal = 0o17; // 15 in decimal
console.log("Octal 0o17 =", octal);

// 6. Hexadecimal Literals (Base 16) - prefix 0x or 0X
let hex = 0x1F; // 31 in decimal
console.log("Hexadecimal 0x1F =", hex);

// 7. Numeric Separators (ES2021+) - underscores for readability
let million = 1_000_000;
let binarySep = 0b1010_1111;
let hexSep = 0xFF_FF;
console.log("1_000_000 =", million);
console.log("0b1010_1111 =", binarySep);
console.log("0xFF_FF =", hexSep);

// 8. BigInt - arbitrary precision integers (suffix n)
let big = 9007199254740991n;
let bigHex = 0x20000000000003n;
console.log("BigInt:", big);
console.log("BigInt hex:", bigHex);

// 9. Special Numeric Values
console.log("Infinity:", Infinity);
console.log("-Infinity:", -Infinity);
console.log("NaN (Not a Number):", NaN);

// 10. Negative Numbers (unary minus operator applied to literal)
let negative = -25;
let negFloat = -3.14;
console.log("Negative:", negative, ", Negative float:", negFloat);

// 11. Zero (both positive and negative zero exist in JS)
let posZero = 0;
let negZero = -0;
console.log("0 === -0:", 0 === -0);     // true
console.log("1/0:", 1 / 0);            // Infinity
console.log("1/-0:", 1 / -0);          // -Infinity

// 12. Scientific notation variations
let sci1 = 1E3;   // 1000
let sci2 = 1e-3;  // 0.001
console.log("1E3 =", sci1, ", 1e-3 =", sci2);
