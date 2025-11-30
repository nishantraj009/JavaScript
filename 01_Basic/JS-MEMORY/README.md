🧠 JavaScript Memory Management

JavaScript divides memory into two main parts:

Memory Type	What it Stores	Examples
Stack	Primitive values + references to objects	number, string, boolean, null, undefined, symbol, bigint
Heap	Objects & Non-Primitive data	arrays, objects, functions
📌 Primitive Data → Stored in Stack

Example:

let a = 10;
let b = "Hello";
let c = true;


Visualization:

STACK
------------------
| a : 10          |
| b : "Hello"     |
| c : true        |
------------------


All values are directly inside stack.

📌 Non-Primitive Data → Stored in Heap

(Stack only stores the reference address)

Example:

let arr = [1, 2, 3];
let obj = { name: "Nishant" };


Visualization:

STACK                               HEAP
-------------------           ---------------------
| arr : #1001 ------->>>----> | #1001: [1,2,3]     |
| obj : #1002 ------->>>----> | #1002: {name:"N"}  |
-------------------           ---------------------


➡ #1001, #1002 = memory addresses
➡ Actual object/array lives in Heap

🔥 Important Concept: Copying Primitive vs Non-Primitive
🟢 Primitive Copy = New Value
let x = 5;
let y = x;
y = 10;

console.log(x); // 5
console.log(y); // 10


Visualization:

STACK
-----------------
| x : 5          |
| y : 10         | (separate copy)
-----------------

🔴 Non-Primitive Copy = Shared Reference
let arr1 = [1, 2];
let arr2 = arr1;
arr2.push(3);

console.log(arr1); // [1, 2, 3]
console.log(arr2); // [1, 2, 3]


Visualization:

STACK                               HEAP
---------------------         --------------------
| arr1 : #5555 -----|-------> | #5555: [1,2,3]    |
| arr2 : #5555 -----|         --------------------
---------------------
(Same memory location!)


➡ Changing arr2 also changes arr1 because both point to same heap location.

🧩 Summary
Type	Memory	Copy Behaviour
Primitive	Stack	Creates new copy
Non-Primitive	Heap	Share same reference