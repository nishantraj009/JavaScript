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