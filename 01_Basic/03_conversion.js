 
// type conversion

/*
let score = 33;        "33" it's a string type

console.log(typeof score);
console.log(typeof (score));  both type is number
*/

 let score = "354abc";
 console.log(typeof score);  // Both are string
 console.log(typeof (score));

 let convertInNum = Number(score); // here not write at Number's place number 
 
 console.log(typeof convertInNum);  // type is number
 console.log(convertInNum); //NaN, not a number 

  