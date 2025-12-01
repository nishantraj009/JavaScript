

// ARROW FUNCTION

// Arrow Function ek short aur modern way hai function banane ka.
// Ye => arrow notation use karta hai.

// 🧠 Syntax

// Traditional Function:

// function add(a, b) {
//     return a + b;
// }


// Arrow Function:

// const add = (a, b) => {
//     return a + b;
// };


// Dono same kaam karte hain, bas arrow wala short hota hai.

// ⭐ Implicit Return

// Agar sirf ek line output return ho rahi hai, to {} aur return likhne ki need nahi:

// const multiply = (x, y) => x * y;

// ⭐ Single Parameter ho to Bracket nahi chahiye
// const square = num => num * num;

// ⭐ No Parameter ho to Empty Bracket
// const greet = () => console.log("Hello!");

// 🔥 Arrow Function Features (Important)
// Feature	Explanation
// Short Syntax	Less code
// Lexical this	Apna khud ka this nahi hota
// No hoisting	Use karne se pehle define karna padega
// Best Use Case	Callbacks, small functions, array methods






const sayHello = () => {
    console.log("Hello from Arrow Function!");
};

sayHello();




const add = (a, b) => {
    return a + b;
};

console.log(add(5, 10)); // Output: 15
