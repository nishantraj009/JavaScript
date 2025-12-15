There are 2 categories of data types:

🔹 1️⃣ Primitive Data Types

Primitive values are simple, immutable (cannot change the original value), and stored by value.

🧾 List of Primitive Types:/

Type	Meaning	Example

Number	Any number → integer, decimal	let age = 20;

String	Text enclosed in quotes	let name = "Nishant";

Boolean	True or false value	let isPass = true;

Null	Empty or no value (set by programmer)	let data = null;

Undefined	Declared but not assigned yet	let x;

BigInt	Very large numbers	let big = 1234567890123n;

Symbol	Unique identity (object keys)	let id = Symbol("key");


🧪 Primitive Examples:

let score = 90;            // Number
let message = "Hello JS";  // String
let isActive = false;      // Boolean
let user = null;           // Null
let a;                     // Undefined
let bigNum = 45678901234567890n; // BigInt
let sym = Symbol("id");    // Symbol


Primitive values: copied by value
(Changing one variable does NOT affect another)

🔸 2️⃣ Reference (Non-Primitive) Data Type

These are complex, stored in Heap memory, and copied by reference.

Type	Meaning
Object	Key → value pairs
Array	List of values
Function	Reusable code block
Date, Map, Set etc.	Special objects
🧪 Examples:
let person = { name: "Nishant", age: 21 }; // Object

let numbers = [1, 2, 3, 4]; // Array

function greet() {
  console.log("Hello!");
} // Function


Reference values: stored by reference
(If one changes → all references change)

Example (important for interviews!):

let arr1 = [10, 20];
let arr2 = arr1; // arr1 reference copied to arr2

arr2.push(30);

console.log(arr1); // [10, 20, 30]  (Changed!)

🧠 typeof Operator

Used to check type of value:

console.log(typeof "Hi");     // string
console.log(typeof 100);      // number
console.log(typeof true);     // boolean
console.log(typeof undefined);// undefined
console.log(typeof null);     // object (JavaScript bug)
console.log(typeof {});       // object
console.log(typeof []);       // object (Array is object)
console.log(typeof function(){}); // function


⚠ Important Question:

Why typeof null is object?
👉 It is a historical bug in JavaScript (not fixed for backward compatibility)

🔄 Type Coercion (Automatic Conversion)

JavaScript auto-converts types in operations:

console.log("5" + 2); // "52" → string + number = string
console.log("5" - 2); // 3 → number
console.log("5" * "2"); // 10 → number


Be careful with “+” operator ❗

🧩 Summary Table
Category	Types	Stored As	Copy Behavior
Primitive	Number, String, Boolean, Null, Undefined, BigInt, Symbol	Value	Copy by value
Reference	Object, Array, Function, etc.	Reference	Copy by reference




<!-- impoetants notes -->


//* ============================
//* Data Types Section
//* ============================

//* Data types define the type of values that a variable can hold.

//? Types of Primitive Data types

//? Number: Represents numeric values, including integers and floating-point numbers.
// Example:

//? String: Represents a sequence of characters enclosed in single or double quotes.
// Example:

//? Boolean: Represents a logical entity with two values: true or false.
// Example:

//? undefined: Represents the absence of a value or an uninitialized variable.
// Example:

//? Null: Represents the absence of a value. It is often used to explicitly indicate that a variable or object property has no assigned value.
// Example:

//? BigInt: Represents integers of arbitrary precision (available since ECMAScript 2020).
// Example:
// const bigNumber = 1234567890123456789012345678901234567890n;

//? Symbol: Represents a unique and immutable data type, often used to create unique identifiers.
// Example:
// const mySymbol = Symbol("description");

//! ============================
//! Data Types Interview Questions
//! ============================

//? 1: What is the difference between null and undefined in JavaScrip?

//? 2: What is the purpose of typeof operator in JavaScript❓

//? 3: What is the result of `typeof null` in JavaScript❓

//? 4: What are primitive data types in JavaScript❓

//? 5: Convert a string to a number?
// We just need to add the '+' sign before the string
// Example:

//? 6: Convert a number to a string?
// We just need to add an empty string after the number
// Example:

//? 7: Explain the concept of truthy and falsy values in JavaScript. Provide examples.❓

//? 8: To check if a non-empty string is truthy or falsy in JavaScript, we can directly use if statement.

//* ==========  Data Types End Section ==========

//todo ---------------- todo Bonus ----------------------

//* ========== parseInt & parseFloat Section ==========
//? parseInt and parseFloat are both functions in JavaScript used for converting strings to numbers, but they have different use cases.

//* parseInt: Definition: parseInt is used to parse a string and convert it to an integer (whole number).
// const myString = "42";
// const myNumber = parseInt(myString, 10);
// console.log(myNumber); // Output: 42

// const myString = "42.5";
// const myNumber = parseInt(myString);
// console.log(myNumber); // Output: 42

//* parseFloat: Definition: parseFloat is used to parse a string and convert it to a floating-point number (decimal number).
// const myString = "42.5";
// const myNumber = parseFloat(myString);
// console.log(myNumber); // Output: 42.5

//TODO  Key Differences:
//? parseInt is used for converting to integers and ignores anything after the decimal point.
//? parseFloat is used for converting to floating-point numbers, preserving the decimal part.
//? Both functions will attempt to convert as much of the string as possible until an invalid character is encountered.

//! Here are more examples
console.log(parseInt("123"));
// 123 (default base-10)
console.log(parseInt("123", 10));
// 123 (explicitly specify base-10)
console.log(parseInt("   123 "));
// 123 (whitespace is ignored)
console.log(parseInt("077"));
// 77 (leading zeros are ignored)
console.log(parseInt("1.9"));
// 1 (decimal part is truncated)

//! When we will not get an Output
console.log(parseInt("&123"));
console.log(parseInt("-123"));
console.log(parseInt("xyz"));
// NaN (input can't be converted to an integer)

//? What is the purpose of the NaN value in JavaScript❓

//* ========== parseInt & parseFloat End Section ==========