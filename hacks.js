/********************************************************************
 *                          Run JS locally                          *
 ********************************************************************/
//Below are the two main approaches

//1 - Run JavaScript using Node.js
/**
 * Step 1 — Install Node.js
 * Step 2 — Create a JS file (i.e., app.js)
 * Step 3 — Run it in VS Code’s terminal with the command:
 *          node app.js
 * Step 4 - for auto-reloading on save, use Node.js built‑in auto‑reload
 *          node --watch app.js
 */

//1 - Run JavaScript in the browser
/**
 * Step 1 — Create a simple html file (index.html)
 * Step 2 — Create a JS file (i.e., app.js)
 * Step 3 — add any JS code in app.js. For example: 
 *          alert("JS is running!");
 * Step 4 - Embed the js script source in the html body
 * Step 5 - Open the HTML file in a browser
 */




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
//both let and const are block-scoped

//Avoid var unless you have a very specific reason
var x = 5; //Function-scoped

let count = 0;
count = 1; // ✓ reassignable

let msg;
// undefined until set

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







/********************************************************************
 *                              Data types                          *
 ********************************************************************/


//Primitives — 7 types
typeof "hello"       // "string"
typeof 42           // "number"  (ints + floats are the same type)
typeof 3.14n        // "bigint"  (arbitrary precision integers)
typeof true         // "boolean"
typeof undefined    // "undefined" — declared but not assigned
typeof null         // "object"  ← famous JS quirk / bug
typeof Symbol()      // "symbol"  — unique identifiers

//Objects (reference types)
const obj = { x: 1 };
const arr = [1, 2, 3];
const fn = () => {};
const d = new Date();

//Checking types safely
typeof val === 'string'
Array.isArray(val)
val instanceof Date
val === null //Strict Equality (does not check undefined)
val == null // null or undefined (does not check "", 0)

        //Truthy & falsy values

// Falsy — evaluate to false in conditions
false, 0, -0, 0n, "", null, undefined, NaN

// Truthy — everything else, including:
"0", ""+"", [], {}, -1  // ← empty array/object are truthy!





/********************************************************************
 *                         Type Coercion                            *
 ********************************************************************/
//the engine automatically converts a value from one type to another

            //Common Coercion Rules

//String + anything → string
"Hello " + 5   // "Hello 5"

//Math operations → numbers
"10" - "5"   // 5
"10" * 2     // 20

//Boolean conversion
Boolean("hello") // true
Boolean(0)       // false
false            // → 0
true             // → 1

//More coercion rules
null             // → 0
[]               // → "" → 0
""               // → 0
undefined        // NaN

            //Equality & Type Coercion
//Always use === in real code. Only use x == null to catch both null and undefined at once.
0 == false              // true => false coerces to 0
"0" == false            // true => "0" coerces to 0 0
0 == ""                 // true => empty string coerces to 0
0 === ""                // false => no coerce
null == undefined       // true => Special rule: null only loosely equals undefined — not 0, not false
null === undefined      // false
1 == true               // true => true coerces to 1
1 === true              // false
null == 0               // false => null coerces to undefined
null == false           // false => null coerces to undefined
NaN == NaN              // false => NaN is the only value in JavaScript that is not equal to itself. Use Number.isNaN()


//Implicit Coercion (automatic)
"5" + 2      // "52"  (number → string)
"5" - 2      // 3     (string → number)
"5" * "3"    // 15 
true + 1     // 2     (true → 1)
false + 1   // 1    — (false → 0)
null + 1    // 1    — (null → 0)
[] + []      // ""   — (arrays → empty strings)
[] + {}      // "[object Object]"

//Explicit Coercion (manual)
String(42)       // "42"
Number("3.5")    // 3.5
Number("")       // 0
Number("abc")    // NaN
Number.isNaN(val)
Boolean(0)      // false
Boolean("hi")   // true
parseInt("10px") // 10
parseFloat("3.5rem") // 3.5

//Nullish Coalescing Assignment
val ?? "default"






/********************************************************************
 *                         Functions                                *
 ********************************************************************/
//Functions are first-class values:
// - assign to variables, pass as arguments, return from other functions.

    //Function declaration (named functions)
//Use declarations for named top-level functions (readable and reusable)

function greet(name) {
  return `Hello, ${name}!`;
}

greet("Ana");  // "Hello, Ana!"
const greeter = greet("Joe"); //if assigned it becomes a Function expression

    //Hoisting — the key feature

// Called BEFORE it's defined — works fine
sayHi();

function sayHi() {
  console.log("Hi!");
}

                //Function expression (not hoisted)
//treats the function as a value (just like a number or string)

const greet = function(name) {
  return `Hello, ${name}!`;
};

// Named expression (better for stack traces - prefered over anonymous)
const double = function double(n) {
  return n * 2;
};

//conditionally assign a function
const fn = condition ? funcA : funcB;

                    //Functions as object methods

// Method shorthand (modern standard)
const user = {
    name: "Ivan",

    // shorthand (preferred)
    walk() {
        return `${this.name} is walking.`;
    },

    // function expression (same result)
    greet: function() {
        return `Hello ${this.name}.`;
    }
};

user.greet();
user.walk();


                    //Arrow functions

//inherits 'this' from the surrounding scope
//use arrow functions for everything inline (.map(), .filter(), event handlers, async calls)

    // Full form
const greet = (name) => {
  return `Hello, ${name}!`;
};

//multiple params
const greet = (name, age) => {
  return `Hello, ${name}! your age is ${age}`;
};

// Implicit return (single expression)
const double = n => n * 2;
const max = (a, b) => (a > b ? a : b);

// No params
const getRandom = () => Math.random();

// Returning an object literal — wrap in parens
const makeUser = name => ({ name: name, active: true });
makeUser("Ana"); // → { name: 'Ana', active: true }

// Returning a boolean operation result
const isNullOrUndefined = (val) => val == null;

//Lexical `this`
// Arrow function inherits `this` from outer scope
function Timer() {
    this.seconds = 0;
    setInterval(() => {
        this.seconds++; // `this` is the Timer instance
    }, 1000);
}

//Array methods

// arrow function to map — transform each item
const prices = [10, 25, 5, 40];
const map = prices.map(p => p * 2);

//DOM events

const btn = document.querySelector('#submit');

// Arrow — when you don't need `this` to be the element
btn.addEventListener('click', () => {
    console.log('clicked');
});

// Declaration/expression — when you need `this` = the element
btn.addEventListener('click', function(){
    this.classList.toggle('active'); // `this` is the button
});

//Default params & rest
function greet(name = "world"){
    return `Hi ${name}`;
}

const sum = (...numbers) => numbers.reduce((a, b) => a + b, 0);

//Callbacks & async
setTimeout(() => render(), 300);

// fetch + async/await
const getData = async () => {
    const res = await fetch(url);
    return res.json();
};

        // Passing a function as an argument

//A function that receives another function as an argument is called a higher-order function
//The received function is called a callback

// 1. Define two simple transform functions
const double = n => n * 2;
const square = (n) => n * n;

// 2. A higher-order function that RECEIVES a callback function as `transform`
const applyToList = (list, transform) => {
    return list.map(transform);  // passes it into .map()
};

// 3. Pass `double` or `square` as the argument — NO () after them!
applyToList([1, 2, 3], double);
applyToList([1, 2, 3], square);

// 4. Or pass an inline arrow directly
applyToList([1, 2, 3], x => x + 10);

                    
        // Returning a function from a function

//When a function returns another function, it's called a factory function or closure

// A factory: takes a rate, returns a NEW function configured with it
// A factory produces a pre-configured callback
const makeMultiplier = (rate) => 
{
    return (x) => x * rate; //callback
};

// these are ordinary functions. 
// Each one "closed over" a different value of rate and carries it forever — this is a closure
const triple = makeMultiplier(3);
const tenTimes = makeMultiplier(10);

// Now use those returned functions like any other
triple(5);
tenTimes(7);

//returning multiple functions from 1 function
function makeCounter() {
    let count = 0;          

    return {
        increment() { count++; },  
        decrement() { count--; },  
        value()     { return count; }
    };
}






/********************************************************************
 *                              Scopes                              *
 ********************************************************************/

// 3 scope levels: Global scope, Function scope, Block scope

            //Global scope — visible everywhere

// accessible in any file/function
const APP_NAME = "MyApp";

            //Function scope — visible inside the function

function render() {
    const html = "<p>hello</p>"; // html only inside this if-block
}

            //Block scope — visible inside { }

if (true) {
    const temp = "block only"; // only inside this if-block
}

//Module scope — each JS file (ES module) has its own scope

//Scope chain — lookup goes outward
const x = "global";

function outer() {
  const x = "outer";

  function inner() {
    // no x here — looks up the chain
    console.log(x); // "outer"
  }
  inner();
}

//var vs let/const scope
if (true) {
  var   leaked = "I escape!";  // function-scoped
  let   safe   = "I stay";     // block-scoped
  const safer  = "I stay too"; // block-scoped
}

console.log(leaked); // "I escape!" — bug risk
console.log(safe);   // ReferenceError — good






/********************************************************************
 *                           Closures                               *
 ********************************************************************/

// A closure = inner function + variables from outer scope it "closes over"

//makeCounter here is the outer scope function
function makeCounter() {
    let count = 0;          // lives in makeCounter's scope

    return {
        increment() { count++; }, //inner function + count
        decrement() { count--; }, //inner function + count
        value()     { return count; } //inner function + count
    };
}

const counter = makeCounter();
counter.increment();
counter.increment();
const val = counter.value();

const counter2 = makeCounter(); // independent copy, own count

//memoization
function memoize(fn)
{
   const cache = {};

   return (arg) => {
      if (cache[arg])
        return cache[arg];
      cache[arg] = fn(arg);
      return cache[arg];
   };
}

const expensiveFn = n => {
  // imagine this takes 2 seconds...
  return n * n;
};

const fastFn = memoize(expensiveFn);

//Classic FE pattern — event handlers
function setupButton(label) {
  const btn = document.querySelector(`#${label}`);

  btn.addEventListener("click", () => {
    // closes over `label` — still accessible
    console.log(`${label} was clicked`);
  });
}

setupButton("save");
setupButton("cancel");

//The loop closure trap

// BUG — var is function-scoped, all handlers share the same i
for (var i = 0; i < 3; i++) {
  buttons[i].addEventListener("click", () => console.log(i)); // always 3!
}

// FIX — let creates a new binding (fresh closure) per iteration
for (let i = 0; i < 3; i++) {
  buttons[i].addEventListener("click", () => console.log(i)); // 0, 1, 2
}






/********************************************************************
 *                           Hoistings                               *
 ********************************************************************/
// JS processes declarations before running any code.
// It "hoists" them to the top of their scope.

// Function declarations — fully hoisted (definition + body)
// Function expressions and arrow functions — not hoisted!!
sayHi();                   // works — no error
function sayHi() { return "Hi!"; }

// var — declaration hoisted, value is NOT
// Use const/let (never var)
console.log(x);             // undefined (not ReferenceError)
var x = 5;

// let / const — hoisted but in Temporal Dead Zone (TDZ)
console.log(y);             // ReferenceError — cannot access before init
let y = 10;

//Temporal Dead Zone (TDZ)

// The TDZ is the gap between the start of the block and the let/const declaration.
// Accessing in this zone = ReferenceError.

{
  // TDZ starts here for `name`
  console.log(name); // ReferenceError

  const name = "Ana"; // TDZ ends here
  console.log(name); // "Ana" — safe
}






/********************************************************************
 *                          this(s) keyword                          *
 ********************************************************************/
//  this depends on how a function is called

//Method call
const obj = {
  greet() { return this; }
};
obj.greet(); // this = obj

//Plain function call
function fn() { return this; }
fn(); // this = window (or undefined in strict)

//Arrow function
const fn = () => this;
// this = enclosing scope's this
// No own this — inherits lexically from where it was written

// Event listener
// Regular function in an event handler — this is the DOM element.
btn.addEventListener("click",
  function() {
    this; // = btn element
  }
);

//Explicit binding — call, apply, bind
function greet(greeting) {
  return `${greeting}, ${this.name}!`;
}

const user = { name: "Ana" };

greet.call(user, "Hello");         // calls immediately, args spread (as list)
greet.apply(user, ["Hello"]);       // calls immediately, args as array

const boundGreet = greet.bind(user); // returns new fn with this locked in
boundGreet("Hi");                    // call later

// The most common this bugs in front-end

class Toggle {
  constructor() { this.active = false; }

  click() { this.active = !this.active; }
}

const t = new Toggle();

// BUG — this is lost when method is detached from object
btn.addEventListener("click", t.click);       // this = btn, not t

// FIX 1 — .bind(obj)
btn.addEventListener("click", t.click.bind(t));

// FIX 2 — arrow wrapper () => obj.method()
btn.addEventListener("click", () => t.click());






/********************************************************************
 *                  Objects manipulation                             *
 ********************************************************************/


//empty object
const empty = {};


const player = {
  name: "Ana",
  score: 0,

  // Method shorthand — no `function` keyword needed
  greet() {
    return `Hi, I'm ${this.name}!`;
  },

  addPoints(pts) {
    this.score += pts;
    return this;  // return `this` to allow chaining
  },

  reset() {
    this.score = 0;
    return this;
  }
};

player.greet();          // "Hi, I'm Ana!"
player.addPoints(10).addPoints(5).reset();  // chaining


                //Three ways to define a method

//1 — In the object literal

const dog = {
  name: "Rex",

  // shorthand (preferred)
  bark() {
    return `${this.name} says: Woof!`;
  },

  // function expression (same result)
  sit: function() {
    return `${this.name} sits.`;
  }
};

//2 — Added after creation (Useful when building objects dynamically.)

const dog = { name: "Rex" };

// Attach a method later
dog.bark = function() {
  return `${this.name} says: Woof!`;
};

// Or an arrow — but this loses `this`!
dog.broken = () => {
  return this.name; // undefined — arrow!
};

//3 — The this rule for methods

const counter = {
  value: 0,

  // Regular method — `this` = counter object
  increment() {
    this.value++;               // works
    return this.value;
  },

  // Arrow as method — `this` = outer scope (window/undefined)
  broken: () => {
    this.value++;               // NaN — `this` is NOT counter
  },

  // Arrow is fine INSIDE a regular method
  delayedLog() {
    setTimeout(() => {
      console.log(this.value);  // works — inherits outer `this`
    }, 1000);
  }
};