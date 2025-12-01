
         ARRAY IN JAVASCRIPT

🔹 What is an Array?

An array is a special data structure that stores multiple values in a single variable.
Values are stored in continuous memory index (0,1,2,...).

Example:

let fruits = ["Apple", "Mango", "Banana"];


Index mapping:

Index	Value
0	Apple
1	Mango
2	Banana
🔹 Why Use Arrays?

✔ Store multiple values
✔ Easy to loop
✔ Built-in useful methods
✔ Improve memory management

🔹 Array Characteristics
Feature	Description
Ordered	Elements have index
Mutable	Values can be changed
Heterogeneous	Can store different data types
Dynamic	Size can grow/shrink automatically

Example:

let data = ["Nishant", 21, true, { tech: "MERN" }, [1,2,3]];

🔹 How to Create Arrays?
Type	Example
Literal (mostly used)	let arr = [10,20,30];
Using Constructor	let arr = new Array(10,20,30);
🔹 Access & Update Elements
let arr = [10, 20, 30];
console.log(arr[1]); // 20

arr[2] = 300; 
console.log(arr); // [10,20,300]

🔹 Important Properties
length → returns total elements
let arr = [1,2,3,4];
console.log(arr.length); // 4

⭐ Most Important Methods (Interview Focus)
1️⃣ Add / Remove Elements
Action	Method	From
Add	push()	end
Remove	pop()	end
Add	unshift()	start
Remove	shift()	start
let arr = [10,20,30];
arr.push(40);   // [10,20,30,40]
arr.pop();      // [10,20,30]
arr.unshift(5); // [5,10,20,30]
arr.shift();    // [10,20,30]

2️⃣ Modify elements inside array
splice(start, deleteCount, items...)
let arr = [1,2,3,4];
arr.splice(2, 1, 100); 
console.log(arr); // [1,2,100,4]

3️⃣ Extract part of array (doesn’t change original)
slice(start, end)
let arr = [10,20,30,40,50];
let part = arr.slice(1,4);
console.log(part); // [20,30,40]

4️⃣ Check / Find
let arr = [10,20,30];
console.log(arr.includes(20)); // true
console.log(arr.indexOf(30));  // 2

5️⃣ String & Array Convert
let text = "A,B,C";
let arr = text.split(","); // ["A","B","C"]
console.log(arr.join("-")); // A-B-C

6️⃣ Looping Arrays
Using for
for(let i=0; i < arr.length; i++){
  console.log(arr[i]);
}

Using for…of
for(let val of arr){
  console.log(val);
}

Using forEach
arr.forEach((val) => console.log(val));

7️⃣ High-Order Methods (Very Important in Interviews)
Method	Purpose
map	transform each element → returns new array
filter	filter elements → returns new array
reduce	reduce all elements to single value

📌 map()

let num = [1,2,3];
let doubled = num.map(x => x * 2);
console.log(doubled); // [2,4,6]


📌 filter()

let num = [5,10,15];
let result = num.filter(x => x > 8);
console.log(result); // [10,15]


📌 reduce()

let sum = [1,2,3,4].reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10

🚀 Memory in JavaScript Arrays (Interview)

Stored in Heap

Variable reference stored in Stack

let arr1 = [1,2,3];
let arr2 = arr1;
arr2.push(4);

console.log(arr1); // [1,2,3,4]


Both point to same memory address

To avoid this → create copy:

let copy = [...arr1]; // Spread operator

❓ Tricky Interview Questions
Q1: Why typeof array → "object"?

Because arrays are built on objects internally.

typeof []; // "object"
Array.isArray([]); // true (correct way)

Q2: Difference — splice() vs slice()?
slice	splice
No change in original	Changes original
Extracts part of array	Insert / Remove elements
🧠 Big O (Time Complexity) — Important
Operation	Time
Push / Pop (end)	O(1)
Shift / Unshift (start)	O(n)
Search	O(n)
Access by index	O(1)
👍 Best Practices

✔ Always use const for arrays
✔ Use spread operator for copying
✔ Prefer map/filter/reduce over loops for functional coding

🎯 Quick Revision Notes
Topic	Highlights
Arrays	Ordered list of elements
Mutable	Can change values
Dynamic	Auto size grow/shrink
Heterogeneous	Multiple types
Storage	Heap (reference type)