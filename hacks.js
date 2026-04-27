/********************************************************************
 *                               Printing                           *
 ********************************************************************/

console.log("Hello, World!");
let name = "Ivan";
console.log("Hello " + name);
console.log(`Hello ${name}`); // Template literal (preferred)

console.error("This is an error"); 
console.warn("This is a warning"); 
console.info("Some info"); 
console.table([{ name: "Ivan", age: 30 }, { name: "Alex", age: 25 }]);

//Printing Multiple Values
let a = 10, b = 20; 
console.log(a, b); // 10 20 
console.log("Sum:", a + b); // Sum: 30

//Template Literals
let name = "Ivan"; 
let age = 30; 
console.log(`Name: ${name}, Age: ${age}`);

//Multiline Strings
console.log(`Line 1 
    Line 2 
    Line 3`
);

//Printing Objects
let user = { name: "Ivan", age: 30 };

console.log(user);                  // Object view
console.log(JSON.stringify(user));  // JSON string

//Pretty print JSON:
console.log(JSON.stringify(user, null, 2));

//Printing Arrays
let numbers = [1, 2, 3]; 

console.log(numbers); // [1, 2, 3]
console.log(numbers.join(", ")); // "1, 2, 3"

//Debugging with Labels
let score = 95; 
console.log("Score:", score);

//Write to HTML Element
<p id="output"></p>

document.getElementById("output").textContent = "Hello World";

//Write HTML Content
document.getElementById("output").innerHTML = "<b>Hello World</b>";

//Alert (Popup)
alert("Hello World!");

//Confirm Dialog
let result = confirm("Are you sure?"); 
console.log(result); // true or false

//Prompt Input
let name = prompt("Enter your name:"); 
console.log(`Hello ${name}`);

//Styled Console Output
console.log("%cHello World", "color: blue; font-size: 16px;");

//Timing & Performance
console.time("Timer"); 
for (let i = 0; i < 1000; i++) {} 
console.timeEnd("Timer");

//Grouped Logs
console.group("User Info"); 
console.log("Name: Ivan"); 
console.log("Age: 30"); 
console.groupEnd();





/********************************************************************
 *                              let & const                         *
 ********************************************************************/

//let
let count = 0;
count = 1; // ✓ reassignable

let msg;
// undefined until set

//const
const MAX = 100;
// MAX = 200 → TypeError

const user = { name: "Ana" };
user.name = "Bea"; // ✓ OK
// binding is const, not contents

// DOM refs — never reassigned
const btn = document.querySelector('#submit');
const API_URL = 'https://api.example.com';

// Counter that updates
let score = 0;
btn.addEventListener('click', () => score++);

// Loop variable
for (let i = 0; i < items.length; i++) { ... }