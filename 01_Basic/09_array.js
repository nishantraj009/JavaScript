

//          ARRAY IN JAVASCRIPT

// 🔹 What is an Array?

// An array is a special data structure that stores multiple values in a single variable.
// Values are stored in continuous memory index (0,1,2,...).

// Example:

// let fruits = ["Apple", "Mango", "Banana"];


// Index mapping:

// Index	Value
// 0	Apple
// 1	Mango
// 2	Banana
// 🔹 Why Use Arrays?

// ✔ Store multiple values
// ✔ Easy to loop
// ✔ Built-in useful methods
// ✔ Improve memory management

// 🔹 Array Characteristics
// Feature	Description
// Ordered	Elements have index
// Mutable	Values can be changed
// Heterogeneous	Can store different data types
// Dynamic	Size can grow/shrink automatically

// Example:

// let data = ["Nishant", 21, true, { tech: "MERN" }, [1,2,3]];

// 🔹 How to Create Arrays?
// Type	Example
// Literal (mostly used)	let arr = [10,20,30];
// Using Constructor	let arr = new Array(10,20,30);
// 🔹 Access & Update Elements
// let arr = [10, 20, 30];
// console.log(arr[1]); // 20

// arr[2] = 300; 
// console.log(arr); // [10,20,300]

// 🔹 Important Properties
// length → returns total elements
// let arr = [1,2,3,4];
// console.log(arr.length); // 4

// ⭐ Most Important Methods (Interview Focus)
// 1️⃣ Add / Remove Elements
// Action	Method	From
// Add	push()	end
// Remove	pop()	end
// Add	unshift()	start
// Remove	shift()	start
// let arr = [10,20,30];
// arr.push(40);   // [10,20,30,40]
// arr.pop();      // [10,20,30]
// arr.unshift(5); // [5,10,20,30]
// arr.shift();    // [10,20,30]

// 2️⃣ Modify elements inside array
// splice(start, deleteCount, items...)
// let arr = [1,2,3,4];
// arr.splice(2, 1, 100); 
// console.log(arr); // [1,2,100,4]

// 3️⃣ Extract part of array (doesn’t change original)
// slice(start, end)
// let arr = [10,20,30,40,50];
// let part = arr.slice(1,4);
// console.log(part); // [20,30,40]

// 4️⃣ Check / Find
// let arr = [10,20,30];
// console.log(arr.includes(20)); // true
// console.log(arr.indexOf(30));  // 2

// 5️⃣ String & Array Convert
// let text = "A,B,C";
// let arr = text.split(","); // ["A","B","C"]
// console.log(arr.join("-")); // A-B-C

// 6️⃣ Looping Arrays
// Using for
// for(let i=0; i < arr.length; i++){
//   console.log(arr[i]);
// }

// Using for…of
// for(let val of arr){
//   console.log(val);
// }

// Using forEach
// arr.forEach((val) => console.log(val));

// 7️⃣ High-Order Methods (Very Important in Interviews)
// Method	Purpose
// map	transform each element → returns new array
// filter	filter elements → returns new array
// reduce	reduce all elements to single value

// 📌 map()

// let num = [1,2,3];
// let doubled = num.map(x => x * 2);
// console.log(doubled); // [2,4,6]


// 📌 filter()

// let num = [5,10,15];
// let result = num.filter(x => x > 8);
// console.log(result); // [10,15]


// 📌 reduce()

// let sum = [1,2,3,4].reduce((acc, curr) => acc + curr, 0);
// console.log(sum); // 10

// 🚀 Memory in JavaScript Arrays (Interview)

// Stored in Heap

// Variable reference stored in Stack

// let arr1 = [1,2,3];
// let arr2 = arr1;
// arr2.push(4);

// console.log(arr1); // [1,2,3,4]


// Both point to same memory address

// To avoid this → create copy:

// let copy = [...arr1]; // Spread operator

// ❓ Tricky Interview Questions
// Q1: Why typeof array → "object"?

// Because arrays are built on objects internally.

// typeof []; // "object"
// Array.isArray([]); // true (correct way)

// Q2: Difference — splice() vs slice()?
// slice	splice
// No change in original	Changes original
// Extracts part of array	Insert / Remove elements
// 🧠 Big O (Time Complexity) — Important
// Operation	Time
// Push / Pop (end)	O(1)
// Shift / Unshift (start)	O(n)
// Search	O(n)
// Access by index	O(1)
// 👍 Best Practices

// ✔ Always use const for arrays
// ✔ Use spread operator for copying
// ✔ Prefer map/filter/reduce over loops for functional coding

// 🎯 Quick Revision Notes
// Topic	Highlights
// Arrays	Ordered list of elements
// Mutable	Can change values
// Dynamic	Auto size grow/shrink
// Heterogeneous	Multiple types
// Storage	Heap (reference type)



// -----------------------------------------------------====================-------------------



//* ======================================
//* ARRAYS IN JAVASCRIPT
//* =====================================

//! Iterable - object where you can use the for-of loop
//! Array-like object - Any object with length property and use indexes to access items
//! Arrays as Objects:  Arrays in JavaScript are a specific type of object that has numeric keys (indices) and a length property. The indices are automatically maintained, and the length property is automatically updated when you add or remove elements from the array.
//! typeof Operator: The typeof operator in JavaScript returns "object" for both arrays and regular objects.

//* JavaScript Array is a data structure that allows you to store and organize multiple values within a single variable. It is a versatile and dynamic object. It can hold various data types, including numbers, strings, objects, and even other arrays. Arrays in JavaScript are zero-indexed i.e. the first element is accessed with an index 0, the second element with an index of 1, and so forth.

//* ======================================
//*  Creating Arrays:
//* =====================================

//? Arrays in JavaScript can be created using the Array constructor or with array literals (square brackets []).

//? Using Array constructor
// let fruits = new Array('apple', 'orange', 'banana')

//? Using array literal
// let fruits = ["apple", "orange", "banana"];
// console.log(fruits);

//? we can also create an empty array
// let arr = [];
// console.log(typeof arr);

//* ======================================
//*  Accessing Elements:
//* =====================================
//?👉 Accessing Elements:  Array elements are accessed using zero-based indices.
// let fruits = ["apple", "orange", "banana"];
// console.log(fruits[3]);
// console.log(fruits["apple"]);

//* ======================================
//*  Modifying Elements:
//* =====================================
//?👉  Modifying Elements: You can modify array elements by assigning new values to specific indices.

// let fruits = ["apple", "orange", "banana"];
// fruits[2] = "mango";
// console.log(fruits);

//* =============================================
//*  Array Traversal / Iterating Over Arrays
//* ============================================
//?👉 Array Traversal / Iterating Over Arrays

// let fruits = ["apple", "orange", "mango", "grapes", "banana"];

//? 1: for of loop , also known as iterable
//* for...of Loop: The for...of loop is used to iterate over the values of an iterable object, such as arrays, strings, or other iterable objects.

// for (let item of fruits) {
//   console.log(item);
// }

// for (let item = 0; item < fruits.length; item++) {
//   console.log(fruits[item]);
// }

//? 2: for in loop
//* for...in Loop: The for...in loop is used to iterate over the properties (including indices) of an object.

// for (let item in fruits) {
//   console.log(item);
// }

// ? 3: forEach Method
//* The arr.forEach() method calls the provided function once for each element of the array. The provided function may perform any kind of operation on the elements of the given array.

// const myForEachArr = fruits.forEach((curElem, index, arr) => {
//   return `${curElem} ${index}`;
//   //   console.log(arr);
// });
// console.log(myForEachArr);

// ? 4: map function
//* map() creates a new array from calling a function for every array element. map() does not change the original array.

// const myMapArr = fruits.map((curElem, index, arr) => {
//   return ` my fav fruit is ${curElem} `;
//   //   console.log(arr);
// });

// console.log(myMapArr);
// console.log(fruits);

//todo Practice Time
//! write a program to Multiply each element with 2
// const numbers = [1, 2, 3, 4, 5];
// // forEach -  Performs an action on each element
// // map -  Creates a new array with transformed elements

// numbers.forEach((curElem) => {
//   console.log(curElem * 2);
//   //   Performs an action on each element
// });

// const doubleValue = numbers.map((curElem) => {
//   return curElem * 2;
//   //   Creates a new array with transformed elements
// });

// console.log(doubleValue);

//* Key Differences
//! Return Value:
//? forEach: It doesn't return a value. The forEach method is used for iterating over the elements of an array and performing a side effect, such as modifying the array or performing a task for each element.

//? map: It returns a new array containing the results of applying a function to each element in the original array. The original array remains unchanged.

//! Chaining:
//? forEach: It doesn't return a value, so it cannot be directly chained with other array methods.

//? map: Since it returns a new array, you can chain other array methods after using map.

//* Use Case:
//? forEach: Used when you want to iterate over the array elements and perform an action on each element, but you don't need a new array.

//? map: Used when you want to create a new array based on the transformation of each element in the original array.

//* ==========================================================================
//*  How to Insert, Add, Replace and Delete Elements in Array(CRUD) - p1
//* ==========================================================================

//? 👉 How to Insert, Add, Replace and Delete Elements in Array(CRUD)
// let fruits = ["apple", "orange", "mango", "grapes", "banana"];

//? 1: push(): Method that adds one or more elements to the end of an array.
// console.log(fruits.push("guava"));
// console.log(fruits);
// The push() method returns the new length.
//? 2: pop(): Method that removes the last element from an array.
// console.log(fruits.pop());
// console.log(fruits);
//? 3: unshift(): Method that adds one or more elements to the beginning of an array.
// console.log(fruits.unshift("guava"));
// console.log(fruits);
//? 4: shift(): Method that removes the first element from an array.
// console.log(fruits.shift());
// console.log(fruits);

//* ==========================================================================
//*  what if, we want to add or remove anywhere in an elements - p2
//* ==========================================================================

//? The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

//* syntax
//? splice(start, deleteCount, item1, item2, /* …, */ itemN)
// let fruits = ["apple", "orange", "banana", "mango"];
// fruits.splice(1, 1, "grapes");
// console.log(fruits);

// //! what if you want to add the element at the end
// fruits.splice(-1, 0, "grapes");
// fruits.splice(1, 0, "grapes");
// console.log(fruits);

//* =========================================
//*  Searching in an Array
//* =========================================
//?👉  Searching and Filter in an Array

//? For Search we have - indexOf, lastIndexOf & includes
// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];

//?1: indexOf Method: The indexOf method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// syntax
// indexOf(searchElement);
// indexOf(searchElement, fromIndex);
// console.log(numbers.indexOf(4, 5));

//? 2: lastIndexOf Method: The lastIndexOf() method of Array instances returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
// const numbers = [1, 2, 3, 6, 4, 5, 6, 7, 8, 9];
// const result = numbers.indexOf(6);
// console.log(result);
// const result1 = numbers.lastIndexOf(6);
// console.log(result1);
// const result = numbers.indexOf(6, 5);
// console.log(result);

//? 3: The includes method checks whether an array includes a certain element, returning true or false.
// Syntax
// includes(searchElement);
// includes(searchElement, fromIndex);

// const numbers = [1, 2, 3, 6, 4, 5, 6, 7, 8, 9];
// const result = numbers.includes(5);
// console.log(result);

//todo Challenge time
//? 1: Add Dec at the end of an array?
//? 2: What is the return value of splice method?
//? 3: Update march to March (update)?
//? 4: Delete June from an array?

// const months = ["Jan", "march", "April", "June", "July"];

// // 1
// months.splice(months.length, 0, "Dec");
// // console.log(months);

// // 2:
// // When used to add elements, the splice method returns an empty array ([]).

// // 3
// const indexToUpdate = months.indexOf("march");
// months.splice(indexToUpdate, 1, "March");
// // console.log(months);

// // 4
// const indexToDelete = months.indexOf("June");
// months.splice(indexToDelete, 1);
// console.log(months);

//* =========================================
//*  Filter in an Array
//* =========================================
//? Search +  Filter
// const numbers = [1, 2, 3, 4, 5, 4, 6, 7, 8, 6, 9];

//? 1: find Method: The find method is used to find the first element in an array that satisfies a provided testing function. It returns the first matching element or undefined if no element is found.

// const result = numbers.find((curElem) => {
//   return curElem > 6;
// });

// console.log(result);

//? 2: findIndex Method: The findIndex() method of TypedArray instances returns the index of the first element in a typed array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const result = numbers.map((curElem) => curElem * 5);
// console.log(result);
// const result2 = result.findIndex((curElem) => {
//   return curElem > 15;
// });
// console.log(result2);

//* 3:  filter Method: The filter method creates a new array with all elements that pass the test implemented by the provided function.
// syntax:
//? filter(callbackFn)
//? filter(callbackFn, thisArg)

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const result = numbers.filter((curElem) => {
//   return curElem > 4;
// });

// console.log(result);

// UseCase: In E-commerce website when we want to Remove or delete any product from addToCart page.
//! Ex. le'ts say user wants to delete value 6.
// let value = 6;
// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];

// let updatedCart = numbers.filter((curElem) => {
//   return curElem !== value;
// });

// console.log(updatedCart);

// Practice time
// !Example 2: Filtering Products by Price
// const products = [
//   { name: "Laptop", price: 1200 },
//   { name: "Phone", price: 800 },
//   { name: "Tablet", price: 300 },
//   { name: "Smartwatch", price: 150 },
// ];
// // Filter products with a price less than or equal to 500

// const filterProducts = products.filter((curElem) => {
//   //   console.log(curElem.price <= 500);
//   return curElem.price <= 500;
// });
// console.log(filterProducts);

// //! Filter unique values
// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];
// let uniqueValues = numbers.filter((curElem, index, arr) => {
//   //   console.log(index);
//   //   console.log(arr.indexOf(curElem));
//   return arr.indexOf(curElem) === index;
// });
// console.log(uniqueValues);
// console.log([...new Set(numbers)]);

//* =========================================
//*  How to Sort and Compare an Array
//* =========================================
//? How to Sort and Compare an Array
//? Sorting an Array: The sort method sorts the elements of an array in place and returns the sorted array. By default, it sorts elements as strings.

// const fruits = ["Banana", "Apple", "Orange", "Mango"];
// const numbers = [1, 2, 4, 3, 6, 5, 6, 7, 4, 8, 9];

// console.log(numbers);

//? compare callback function
// syntax
// const sortedNumbers = numbers.sort((a, b) => a - b);
// if(a>b) return 1  => switch the order
//  if(b>a) return -1  => keep the order

// numbers.sort((a, b) => {
//   if (a > b) return -1;
//   if (b > a) return 1;
// });

// console.log(numbers);

//? For ascending order
// const sortedNumbers = numbers.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } else if (b > a) {
//     return -1;
//   }
// });

//? For descending order
// const sortedNumbers = numbers.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   } else if (b > a) {
//     return 1;
//   }
// });
//* =========================================
//*  Very Important Array Methods
//* =========================================

//? Map(), Filter(), Reduce(),
// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.

// Original array of numbers
// const numbers = [1, 2, 3, 4, 5];

//! Using map to square each number and create a new array
// const numbers = [1, 2, 3, 4, 5];

// let result = numbers.map((curElem) => curElem * curElem);
// console.log(result);

//! 1: Using the map method, write a function that takes an array of strings and returns a new array where each string is capitalized.
// Original array of strings
const words = ["APPLE", "banana", "cherry", "date"];

// const result = words.map((curElem) => {
//   return curElem.toLowerCase();
// });

// console.log(result);

//! 2: Using the map method, write a function that takes an array of numbers and returns a new array where each number is squared, but only if it's an even number.

// Original array of numbers
const numbers = [1, 2, 3, 4, 5];

// const result = numbers
//   .map((curElem) => {
//     if (curElem % 2 === 0) {
//       return curElem * curElem;
//     }
//   })
//   .filter((curElem) => curElem !== undefined);

// console.log(result);

// const evenSquare = numbers
//   .map((curNum) => (curNum % 2 === 0 ? curNum * curNum : undefined))
//   .filter((curElem) => curElem !== undefined);

// console.log(evenSquare);

//! 3: Using the map method, write a function that takes an array of names and returns a new array where each name is prefixed with "Mr. ".

// const names = ["ram", "vinod", "laxman"];
// const prefixName = names.map((curName) => `Mr. ${curName}`);
// console.log(prefixName);

//? Reduce method
// The reduce method in JavaScript is used to accumulate or reduce an array to a single value. It iterates over the elements of an array and applies a callback function to each element, updating an accumulator value with the result. The reduce method takes a callback function as its first argument and an optional initial value for the accumulator as the second argument.
// syntax
// array.reduce(function callback(accumulator, currentValue, index, array) {
//   // Your logic here
//   // Return the updated accumulator value
// }, initialValue);

// callback: A function that is called once for each element in the array.
// accumulator: The accumulated result of the previous iterations.
// currentValue: The current element being processed in the array.
// index (optional): The index of the current element being processed.
// array (optional): The array reduce was called upon.
// initialValue (optional): An initial value for the accumulator. If not provided, the first element of the array is used as the initial accumulator value.

const productPrice = [100, 200, 300, 400, 500];

const totalPrice = productPrice.reduce((accum, curElem) => {
  return accum + curElem;
}, 0);

console.log(totalPrice);