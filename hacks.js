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
 *                              lets & consts                         *
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
 *                         Functionss                                *
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

//JS functions accept ANY number of arguments
function test(a, b) {
    console.log(a, b);
}

test(1);          // ok
test(1, 2, 3, 4); // also ok

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

//rest parameters give you a safe, explicit way to capture all arguments
const sum = (...numbers) => numbers.reduce((a, b) => a + b, 0);

function sum(...nums) {
    return nums.reduce((a, b) => a + b, 0);
}

//JS functions expect separate arguments, not arrays
const arr = [1, 5, 10];
sum(arr);      // ❌ NaN — wrong
sum(...arr);   // ✔️ correct

//passing objects as arguments to a function
//Objects cannot be expanded into positional parameters without spread

function greet(first, last) {
    console.log(`Hello ${first} ${last}`);
}

const person = { first: "Ivan", last: "Petrov" };

greet(person);        // ❌ wrong
greet(...Object.values(person)); // ✔️ works


//Callbacks & async
setTimeout(() => render(), 300);

// fetch + async/await
const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return await response.json();
};

async function getData(url) {
    return await fetch(url)
        .then(response => response.json());
}

getData("https://jsonplaceholder.typicode.com/todos/1");

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
// A factory produces a pre-configured callback (x: any) => number
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


//example using expression functions: returning an anonymous (inner) function expression 
// () => number
const outer = function(){
    let count = 0; 
    return function() {
         return ++count;
    };
};







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

//Fix 2 — IIFE
//The IIFE is called immediately with the current value of i
for (var i = 0; i < 3; i++) {
  (function(j) {
    setTimeout(function() {
      console.log(j);
    }, 100);
  })(i);
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
 *                               Arrays                             *
 ********************************************************************/
// Ordered, indexed, any mix of types, dynamic length


const emptyArray = [];

const nums = [1, 2, 3];

const mixedArray = [ 42, "hello", true, null, { id: 1}, new Date() ];

const nestedArray = [[1, 2], [3, 4]];

// Access by index (zero-based)
nums[0];      //1
nums.at(-1);  // 3 — last, modern syntax
nums.at(-2);  // 2 — second from end

// length
nums.length;

// Type check
Array.isArray(nums);  // true — never use typeof (returns "object")


          // Destructuring arrays

const [a, b, c] = [10, 20, 30]; // a=10, b=20, c=30

// Skip items
const [ first, , third] = [1, 2, 3]; // first=1, third=3

// Rest — collect the tail
const [ head, ...tail ] = [1, 2, 3, 4]; // head=1, tail=[2,3,4]

// Default values
const [ x = 0, y = 0 ] = [5];    // x=5, y=0


          //Spread arrays

const a = [1, 2];
const b = [3, 4];

// Merge arrays
const mergedArray = [...a, ...b]; // [1, 2, 3, 4]

// Clone (shallow)
const clonedArray = [...a];

// Insert in the middle
const insertedArray = [ 0, ...a, 99]; // [0, 1, 2, 99]

// Pass array as args
Math.max(...a); // 2






/********************************************************************
 *                  Objectss manipulation                             *
 ********************************************************************/
// Dictionary like structre key:value pairs => [ ["a",1], ["b",2], ["c",3] ]
// Objects contain properties and methods

//empty object
const empty = {};

// Keys are always strings (no need to wrap in quotes)
const user = { name: "Ana", age: 30, role: "admin" };
console.log(user); // { name: "Ana", age: 30, role: "admin" }

//Access object value using dot notation
console.log(user.role); // "admin"

//Access object value using bracket notation
console.log(user["age"]); // 30

// Adding a property after declaration
user.id = 1;

// Bracket notation — dynamic or special keys
const key = "email";
user[key]  = "ana@example.com";
user["last name"] = "Smith";

// Remove entries
delete user.age; //mutates the object

// Bracket notation for dynamic keys
const key = "role";
delete user[key];

// Immutable pattern — exclude via destructuring rest
const { age: _, ...withoutAge } = user;
// withoutAge = { name:"Ana", role:"admin" } — original untouched

// object keys can be any string
const varyingKeys = {
  Name:           "Ana",       // capital first letter — fine
  SCREAMING_KEY:  "value",    // all caps — fine
  camelCase:      42,          // camelCase — most common convention
  "with spaces":  true,       // needs quotes — use bracket notation
  "123start":     "ok",        // starts with number — needs quotes
  _private:       "convention" // underscore prefix — just a convention
};

varyingKeys["with spaces"];    // true    — bracket notation (required here)
varyingKeys["SCREAMING_KEY"];  // "value" — bracket also works for normal keys

//duplicates are discarded. the last definition silently wins. No error thrown
const duplicates = {
  name: "Ana",
  age:  25,
  name: "Bea",  // duplicate — overwrites "Ana" silently
  age:  30       // duplicate — overwrites 25 silently
};

duplicates.name; // "Bea"  — last one wins
duplicates.age;  // 30    — last one wins

// Adding a duplicate key - no error, no new entry
duplicates.name = "John"; //Result: { name: "John", age: 30 }
 
      //Destructuring

// Extract properties into variables
const { name, age } = user;

// Rename on the way out
const { name: userName, role: userRole} = user;

// Default Values in Destructuring
const { role = "guest" } = user;

// Array destructuring
const [first, second, ...rest] = [10, 20, 30, 40, 50];  
//first → 10,  second → 20,  rest → [30, 40, 50]

// Skip items
const [first, , third, ...rest] = [10,20,30,40,50];
//first → 10,  third → 30,  rest → [40,50]

// In function params — very common in React
function greet({ name, role = "guest"}){
    return `Hi ${name}, you are a ${role}`;
}


      //Spread & rest

// Spread — expand into individual items (immutable pattern)
const a = { x: 1 };
const b = { ...a, y: 2 };   // { x:1, y:2 }

// Merge objects (last wins on conflict)
const merged = {...defaults, ...overrides };

//Update an object property without changing the original (immutable pattern)
const user = { name: "Ivan", age: 30 };
const updated = { ...user, age: 31 };

// Clone array / object (shallow)
const copy = { ...original };
// Object.assign — shallow copy
const copy2 = Object.assign({}, original);

// Rest — collect remaining props
const { id, ...details } = user;  // details = { name, age, role } — id excluded

      //Object static methods

const obj = { a: 1, b: 2, c: 3 };

const keys = Object.keys(obj);  // ["a","b","c"]
const values = Object.values(obj); // [1, 2, 3]
const entries = Object.entries(obj);  // // [ ["a",1], ["b",2], ["c",3] ]

// Iterate with entries
Object.entries(obj).forEach(([k,v]) => console.log(`key: ${k}, value: ${v}`));

// Merge — like spread, last prop wins
const targetObject = Object.assign({}, defaults, overrides);

// Freeze — makes object immutable
const config = Object.freeze({ env: "prod" });

// From entries — rebuild object from pairs
Object.fromEntries(pairs);

// Transform values with fromEntries
Object.fromEntries(
  Object.entries(obj).map(([k,v]) => [k, v*2])
); // {"a":2,"b":4,"c":6}


      //Object Methods

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

//return an object containing 3 methods
function makeCounter() {
    let count = 0;          

    //object literal
    return {
        increment() { count++; },  
        decrement() { count--; },  
        value()     { return count; }
    };
}


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


      //Optional chaining & nullish coalescing — safe access

const user = { profile: { avatar: "img.png" } };

// Without optional chaining — throws if profile is null
user.profile.avatar;    // "img.png"
user.settings.theme;    // TypeError — settings is undefined

// With optional chaining — returns undefined instead of throwing
user.settings?.avatar;

// nullish coalescing
user.settings?.avatar ?? "light";   // "light" — fallback via ??

// Also works on methods and arrays
user.getName?.();   // undefined if method doesn't exist
arr?.[0];           // undefined if arr is null/undefined


      //check if a key exists

// 1. in operator — checks own + prototype chain
"name" in user;         // true
"email" in user;        // false
"toString" in user;    // true! (from Object.prototype)

// 2. hasOwnProperty — own properties only (safer)
user.hasOwnProperty("name");     // true
user.hasOwnProperty("toString"); // false — not own

// 3. Object.hasOwn() — modern, preferred over hasOwnProperty
Object.hasOwn(user, "name");    // true

// 4. Undefined check — UNRELIABLE, avoid
user.email !== undefined;       // false — but also false if key exists with value undefined!


            //check if a value exists

// Object.values() + includes()
Object.values(user).includes("Ana");    // true
Object.values(user).includes("guest");  // false
Object.values(user).includes(0);        // true  — 0 is a value

// Find which key holds a specific value
const key = Object.keys(user).find(k => user[k] === "admin");
// key = "role"

        //count entries

// Object.keys() returns an array of own enumerable keys
Object.keys(user).length;    // 3

// Object.entries() also works (same count)
Object.entries(user).length; // 3


        //check empty object

// Best way — Object.keys().length
Object.keys(empty).length === 0;     // true

// Wrap in a helper for reuse
const isEmpty = obj => Object.keys(obj).length === 0;

isEmpty({});           // true
isEmpty({ a: 1 });    // false

// WRONG — {} is always truthy, this never works
if (empty) { /*...*/ }     // always true — {} is truthy!


        //iterate all entries

// 1. Object.entries().forEach — key + value pair (most convenient)
Object.entries(user).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

// 2. for...of with Object.entries() — same, with break/continue support
for (const [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}

      //Deep copy methods

const original = {
  name: "Ana",
  address: { city: "Montréal" }
};

// 1. structuredClone — modern, best option
const deep1 = structuredClone(original);

// 2. JSON round-trip — works for plain data only
// Loses: functions, undefined, Date, Map, Set
const deep2 = JSON.parse(JSON.stringify(original));

// Now nested objects are fully independent
deep1.address.city = "Toronto";
original.address.city; // "Montréal" — untouched






/********************************************************************
 *                        JSONs manipulation                        *
 ********************************************************************/
/**
 * Valid JSON data types: string, number, boolean, null, object, array
 * JSON object: Keys must be double-quoted strings
 * Not valid in JSON: undefined, functions, Date objects, NaN, Infinity, comments, trailing commas.
 */

//JSON string format
const jsonString = '{ "name": "Ana", "age": 30 }';

        // JSON.stringify()

// Converts a JS value → JSON string
// Use to send data to APIs or save to storage

JSON.stringify(value);
JSON.stringify(value, replacer);
JSON.stringify(value, null, 2); // 3rd arg = indent spaces

// print Json as string
console.log(JSON.stringify(user)); 

const obj = { a: 1, b: [2, 3] };
JSON.stringify(obj); // '{ "a": 1, "b": [2,3] }'
JSON.stringify(obj, null, 2); // pretty-printed, 2-space indent

//Pretty print JSON:
console.log(JSON.stringify(user, null, 2));

//replacer => Filter or transform keys during serialization.
JSON.stringify(obj, ['name','age']); // Array: only include these keys

// Function: custom transform
JSON.stringify(obj, (key, val) => 
  typeof val === 'number' ? val * 2 : val
);

            //stringify behavior

/*
+-------------------------+-----------------------------------+
| value Type              | Result                            |
+-------------------------+-----------------------------------+
| undefined (in object)   | key is omitted entirely           | 
| undefined (in array)    | replaced with null                | 
| function                | omitted (object) / null (array)   | 
| NaN / Infinity          | serialized as null                | 
| Date                    | ISO 8601 string (via .toJSON())   | 
| Map / Set               | {} and [] — data lost!            | 
| Circular reference      | throws TypeError                  | 
+-------------------------+-----------------------------------+
*/  

        // JSON.parse()

// Converts a JSON string → JS value
// Use to read API responses or stored data

JSON.parse(text);
JSON.parse(text, reviver); // reviver transforms values

const str = '{"a":1,"b":[2,3]}';
const obj = JSON.parse(str);
obj.a; // 1
obj.b; // [2, 3]

// reviver => Transform values while parsing. 
// Common use: restore Date objects.
JSON.parse(str, (key, val) => {
  if (key === 'date')
    return new Date(val);
  return val;
});

      // Equality check (plain objects)

const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);
// {a:1, b:2} ≠ {b:2, a:1}
// Use a proper deep-equal lib for robust comparisons.

      // Deep clone (simple)

const clone = JSON.parse(JSON.stringify(obj));
// Prefer structuredClone(obj) in modern environments

      // toJSON() hook

// If an object has a toJSON() method, JSON.stringify calls it automatically and serializes the return value.
const obj = {
  name: 'Ana',
  secret: 'hidden',
  toJSON() { return { name: this.name }; }
};
JSON.stringify(obj); // '{"name":"Ana"}'  — secret excluded

      // Fetch API + JSON

const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
const data = await res.json();
// res.json() parses body for you to get the JS value directly

// Sending JSON:
fetch('/api', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: 'Ana' })
});      

      // localStorage + JSON

// Save
localStorage.setItem(
  'user',
  JSON.stringify({ name: 'Ana' })
);

// Load
const user = JSON.parse(
  localStorage.getItem('user')
);
// returns null if key missing

      // Error handling

// parse throws on invalid JSON
try {
  const data = JSON.parse(rawText);
} catch (e) {
  console.error('Invalid JSON:', e.message);
}

// stringify throws on circular refs
try {
  JSON.stringify(circularObj);
} catch (e) {
  console.error('Circular:', e.message);
}





/********************************************************************
 *                      Prototypes                                  *
 ********************************************************************/
// Every JS object has a hidden [[Prototype]] → Object.prototype link
// When you access a property JS doesn't find on the object, it walks UP the prototype chain to look for it.

/** 
 * Object.prototype (root)
    toString, hasOwnProperty, valueOf…
 */

const animal = {
  breathe() { return "breathing"; }
};

const dog = Object.create(animal); // dog's prototype = animal
dog.name = "Rex";

dog.breathe(); // "breathing" — found on prototype, not dog itself
dog.name;     // "Rex"      — found directly on dog

Object.getPrototypeOf(dog) === animal; // true

// .prototype — only exists on constructor functions/classes
// It's the object that will become [[Prototype]] of instances
function Dog(name) { this.name = name; }
Dog.prototype.bark = function() { return "Woof!"; };

const rex = new Dog("Rex");
rex.bark(); // "Woof!" — found on Dog.prototype

// Object.getPrototypeOf — the safe, modern way to read [[Prototype]]
Object.getPrototypeOf(rex) === Dog.prototype; // true

// __proto__ — old, deprecated. Don't use it in production code.






/********************************************************************
 *                        Classes & OOP                             *
 ********************************************************************/
//Classes are syntactic sugar over prototypes — under the hood, speak() still lives on Animal.prototype, not on each instance. 
//Every new Animal() shares the same method via the chain.

//Class syntax — modern OOP in JS

class Animal{
  constructor(name, sound){
    this.name = name;  // instance property
    this.sound = sound;
  }

  speak(){   // goes on Animal.prototype
      return `${this.name} says ${this.sound}`;
  }
  
  static describe(){  // called on the class, not instances
    return "I am an Animal class";
  }

  get label(){   // getter — access as property
    return `[${this.name}]`;
  }
}

const cat = new Animal("Cat", "meow");
cat.speak();
cat.label;      // "[Cat]"  — getter, no ()
Animal.describe();

      //Private fields (#)

class BankAccout {
  #balance = 0;   // truly private

  deposit(amount){
    this.#balance += amount;
  }

  get balance(){
    return this.#balance;
  }
}

const acc = new BankAccout();
acc.deposit(1000);
acc.balance;

      //Inheritance

class Mammal {
  constructor(name) { this.name = name; }
  speak() { return `${this.name} makes a noise.`; }
}

class Dog extends Mammal{
  constructor(name, breed){
    super(name);  // MUST call super() before using this
    this.breed = breed;
  }

  speak() {              // overrides Animal.speak — polymorphism
    return `${this.name} barks!`;
  }

  info() {
    return super.speak() + ` Breed: ${this.breed}`;
  }
}

const rex = new Dog("Rex", "Labrador");
rex.speak();    // "Rex barks!"  — Dog's override
rex.info();     // "Rex makes a noise. Breed: Labrador"
rex instanceof Dog;   // true
rex instanceof Mammal;    // true — inherits up the chain