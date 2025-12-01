
// 👌 Bonus Tip (Interview Point)

// Difference between == and ===:
// == only checks value → "5" == 5 (true)
// === checks value + type → "5" === 5 (false)

// ❇️ TYPE OF OPERATORS

// 1️⃣ Arithmetic Operators
// console.log(10 + 5); // 15

// 2️⃣ Unary Operators
// let x = 5;
// console.log(++x); // 6 (pre-increment)

// 3️⃣ Assignment Operators
// let a = 10;
// a += 5; 
// console.log(a); // 15

// 4️⃣ Comparison (Relational) Operators
// console.log(5 === "5"); // false (strict check)

// 5️⃣ Logical Operators
// console.log(true && false); // false

// 6️⃣ Bitwise Operators
// console.log(5 & 1); // 1 (0101 & 0001 = 0001)

// 7️⃣ Ternary Operator
// let age = 20;
// console.log(age >= 18 ? "Adult" : "Minor"); // Adult

// 8️⃣ Type Operators
// console.log(typeof "Hello"); // string

// 9️⃣ String Operator
// console.log("Hello" + " JS"); // Hello JS



// ===================================================



// 1️⃣ Arithmetic Operators
console.log("---- Arithmetic Operators ----");

let a = 10;
let b = 3;

console.log("a + b =", a + b); // 13
console.log("a - b =", a - b); // 7
console.log("a * b =", a * b); // 30
console.log("a / b =", a / b); // 3.333..
console.log("a % b =", a % b); // 1 (remainder)
console.log("a ** b =", a ** b); // 1000 (power)


// 2️⃣ Unary Operators
console.log("---- Unary Operators ----");

let x = 5;
console.log("x++ =", x++); // 5 (first print then increment)
console.log("After x++ =", x); // 6

let y = 5;
console.log("++y =", ++y); // 6 (first increment then print)

console.log("x-- =", x--); // 6
console.log("After x-- =", x); // 5


// 3️⃣ Assignment Operators
console.log("---- Assignment Operators ----");

let c = 10;
c += 5; // c = c + 5
console.log("c += 5 ->", c);

c -= 3;
console.log("c -= 3 ->", c);

c *= 2;
console.log("c *= 2 ->", c);

c /= 4;
console.log("c /= 4 ->", c);

c %= 3;
console.log("c %= 3 ->", c);


// 4️⃣ Comparison Operators
console.log("---- Comparison Operators ----");

console.log(5 == "5");  // true (value check)
console.log(5 === "5"); // false (value + type check)
console.log(7 > 3);     // true
console.log(7 < 5);     // false
console.log(7 >= 7);    // true
console.log(7 <= 8);    // true
console.log(7 != 8);    // true
console.log(7 !== "7"); // true (both type+value)


// 5️⃣ Logical Operators
console.log("---- Logical Operators ----");

console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false


// 6️⃣ Bitwise Operators
console.log("---- Bitwise Operators ----");

console.log(5 & 1);  // AND -> 1
console.log(5 | 1);  // OR  -> 5
console.log(5 ^ 1);  // XOR -> 4
console.log(~5);     // NOT -> -6
console.log(5 << 1); // Left Shift -> 10
console.log(5 >> 1); // Right Shift -> 2


// 7️⃣ Ternary Operator
console.log("---- Ternary Operator ----");

let age = 18;
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result);


// 8️⃣ Typeof & Instanceof Operators
console.log("---- typeof & instanceof ----");

console.log(typeof "Hello"); // string
console.log(typeof 123); // number
console.log(typeof true); // boolean
console.log(typeof {}); // object
console.log(typeof []); // object (arrays are objects)

let arr = [1, 2, 3];
console.log(arr instanceof Array); // true


// 9️⃣ String Operators
console.log("---- String Operators ----");

let firstName = "Shradha";
let lastName = "Mam";
console.log(firstName + " " + lastName); // Concatenation

let str = "Hello";
str += " Students";
console.log(str);
