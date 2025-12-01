// ========================================
// 01. ARRAY DECLARATION
// ========================================
const myArray = [0, 1, 2, 3, 4, 5];
const myHeroes = ["thor", "ironman", "spiderman"];
const myArray2 = new Array(1, 2, 3, 4);

console.log("Original Array:", myArray);【11562.56】【11804.0】

// ========================================
// 02. ACCESSING ELEMENTS (Zero-based indexing)
// ========================================
console.log("First element:", myArray[0]);     // 0
console.log("Element at index 2:", myArray[2]); // 2
console.log("Array length:", myArray.length);   // 6【11667.76】【11824.319】

// ========================================
// 03. MUTATING METHODS (Change Original Array)
// ========================================
console.log("\n=== PUSH & POP ===");
myArray.push(6, 7);  // Add to END
console.log("After push:", myArray);  // [0,1,2,3,4,5,6,7]

console.log("Pop (remove last):", myArray.pop());  // 7【11923.239】【11994.359】

console.log("\n=== UNSHIFT & SHIFT ===");
myArray.unshift(0);  // Add to START (slow for large arrays)
console.log("After unshift:", myArray);  // [0,0,1,2,3,4,5,6]

console.log("Shift (remove first):", myArray.shift());  // 0【12026.8】【12110.359】

console.log("Final array:", myArray);  // [0,1,2,3,4,5,6]

// ========================================
// 04. QUESTION METHODS
// ========================================
console.log("\n=== QUESTION METHODS ===");
console.log("Includes 9?", myArray.includes(9));     // false
console.log("Index of 3:", myArray.indexOf(3));      // 3
console.log("Index of 9:", myArray.indexOf(9));      // -1【12162.72】【12179.479】

// ========================================
// 05. SLICE vs SPLICE
// ========================================
const myNumbers = [1, 2, 3, 4, 5, 6, 7];
console.log("\n=== SLICE vs SPLICE ===");
console.log("Original:", myNumbers);

const newArray1 = myNumbers.slice(1, 4);  // Returns COPY [2,3,4]
console.log("Slice(1,4):", newArray1);
console.log("Original unchanged:", myNumbers);  // [1,2,3,4,5,6,7]

const newArray2 = myNumbers.splice(1, 3);  // MODIFIES original [2,3,4]
console.log("Splice(1,3):", newArray2);
console.log("Original changed:", myNumbers);  // [1,5,6,7]【12358.199】【12429.439】

// ========================================
// 06. MERGING ARRAYS
// ========================================
const marvel = ["thor", "ironman", "spiderman"];
const dc = ["superman", "flash", "batman"];

console.log("\n=== MERGING ARRAYS ===");
// ❌ WRONG - Creates nested array
// marvel.push(dc);  // ["thor", "ironman", "spiderman", ["superman", "flash", "batman"]]

// ✅ CORRECT METHODS
const allHeroes1 = marvel.concat(dc);
console.log("Concat:", allHeroes1);

const allHeroes2 = [...marvel, ...dc];  // Spread operator (PREFERRED)
console.log("Spread:", allHeroes2);【12921.84】【13044.8】

// ========================================
// 07. FLATTEN NESTED ARRAYS
// ========================================
const nestedArray = [1, [2, 3], [4, [5, 6]], 7, [8, [9, [10]]]];

const flatArray = nestedArray.flat(Infinity);
console.log("\n=== FLATTEN ===");
console.log("Nested:", nestedArray);
console.log("Flattened:", flatArray);  // [1,2,3,4,5,6,7,8,9,10]【13208.56】

// ========================================
// 08. Array.from() & Array.of()
// ========================================
console.log("\n=== Array.from() & Array.of() ===");
console.log(Array.from("hitesh"));                    // ['h','i','t','e','s','h']
console.log(Array.from({length: 3}));                 // [undefined, undefined, undefined]
console.log(Array
