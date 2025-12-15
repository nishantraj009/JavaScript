
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


// Important Notes

//* ===================================
//*  EXPRESSIONS AND OPERATORS Section
//* ====================================

//? 1st we will see what is expression means and also what is operand and operator in any expression?

//* Types of Operators in JS
// Assignment operators
// Arithmetic operators
// In arithmetic we increment and decrement operator.
// Comparison operators
// Logical operators
// String operators
// Conditional (ternary) operator

//* ===================================
//* 1: Assignment operators
//* ====================================

//? Assignment operators in programming are symbols used to assign values to variables. They take the value on the right side of the operator and assign it to the variable on the left side.

// examples

//* ===================================
//* 2: Arithmetic operators
//* ====================================

//? Arithmetic operators in programming perform basic mathematical operations on variables or values. They include addition, subtraction, multiplication, division, and modulus.

//? Addition (+): Adds two values or variables.
// Example:
// let x = 5;
// let y = 10;
// let sum = x + y;
// console.log(sum);

//? Subtraction (-): Subtracts the right operand from the left operand.
// Example:
// let a = 10;
// let b = 7;
// let difference = a - b;

//? Multiplication (*): Multiplies two values or variables.
// Example:
// let p = 4;
// let q = 6;
// let product = p * q;

//? Division (/): Divides the left operand by the right operand.
// Example:
// let m = 15;
// let n = 3;
// let quotient = m / n;

//? Modulus (%): Returns the remainder when the left operand is divided by the right operand.
// Example:
// let c = 17;
// let d = 5;
// let remainder = c % d;

//* ===================================
//* Challenge Time
//* ====================================

//! What will be the Output 🤔💭
// let result = "hello" / 2 ❓

//* ===================================
//*  InterView Question
//* ====================================

//! let result = 0.1 + 0.2 ❓ 🤔💭

//* ===================================
//* 3: String Operators
//* ====================================

//? There are a few ways to concatenate strings in JavaScript. The most common way is to use the + operator. For example, to concatenate the strings "Hello" and "World", you would use the following code:

// var str1 = "Hello";
// var str2 = "World";
// var str3 = str1 + str2;
// console.log(str3);

//* ===================================
//*  InterView Question
//* ====================================

//! console.log("5" + 3);  // Outputs "53" ❓

//* ===================================
//* 4: comparison operators
//* ====================================

//? Comparison operators in JavaScript are used to compare values and return a Boolean result (true or false).

//? Equal (==): Checks if two values are equal, performing type coercion if necessary.
// console.log(5 == 5);

//? Strict Equal (===):
// Checks if two values are equal without performing type coercion.
// console.log(5 === "5");

//? Not Equal (!=   👉 ! =):
// Checks if two values are not equal, performing type coercion if necessary.
// console.log(5 != "5");

//? Greater Than (>):
// Checks if the value on the left is greater than the value on the right.
// Example: 10 > 5 evaluates to true.
// console.log(5 > 2);

//? Less Than (<):
// Checks if the value on the left is less than the value on the right.
// Example: 5 < 10 evaluates to true.
// console.log(5 < 10);

//? Greater Than or Equal To (>=):
// Checks if the value on the left is greater than or equal to the value on the right.
// Example: 10 >= 10 evaluates to true.
// console.log(10 <= 10);

//? Less Than or Equal To (<=):
// Checks if the value on the left is less than or equal to the value on the right.
// Example: 5 <= 10 evaluates to true.
// console.log(5 >= 10);

//* ===================================
//*  InterView Question
//* ====================================

//! What is the difference between == and === operators in JavaScript❓

//* ===================================
//* 5: Logical operators in JavaScript
//* ====================================

//* There are three main logical operators: && (logical AND), || (logical OR), and ! (logical NOT).

//? Logical AND (&&): Returns true if both operands are true, otherwise, it returns false.
// Example:
// var x = 5;
// var y = 10;
// console.log(x > 0 && y > 0);

//? Logical OR (||): Returns true if at least one of the operands is true, otherwise, it returns false.
// Example:
// var a = 15;
// var b = 0;
// console.log(a > 10 || b > 10);

//? Logical NOT (!):
//? Returns true if the operand is false, and false if the operand is true.
// Example:
// var isOpen = false;
// console.log(!isOpen);

//* ===================================
//*  InterView Question
//* ====================================

//? Combining logical operators allows you to create complex conditions:
//! Q: Write a program that determines if a person is eligible to drive based on their age being greater than or equal to 18 and having a valid driver's license❓

// var age = 18;
// var hadDrivingLicense = true;

//! How would the result change if hasDriverLicense was set to false❓

//* ===================================
//* 6: Conditional (ternary) operator
//* ====================================

//? syntax: condition ? expressionIfTrue : expressionIfFalse;
// ! write a program to check if the candidates isEligibleToDrive or not? Age must be equal to or greater then 18.

//! Q: Let's say you have a variable score representing a student's exam score. If the score is greater than or equal to 60, the student passes; otherwise, they fail. Use the conditional (ternary) operator to determine the result and store it in a variable called result. Log the result to the console❓

//* ===================================
//*  Combined Interview Questions
//* ====================================

// console.log("5" - 3);

// console.log(2 < 12 < 5);

// console.log("20" + 10 + 10);