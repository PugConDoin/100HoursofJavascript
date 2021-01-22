/* ##########################
# WAYS TO DECLARE FUNCTIONS #
########################### */

/* Quick note on Hoisting. JavaScript recognises the importance of 
functions and wherever they are in your code, when the sript file runs,
functions declared with a function keyword, get hoisted to the top. 
This means you can call the function in your code before you've declared it.

NOTE: 
Anonymous functions are not hoisted. 
Function Expressions are not hoisted.
*/

// 1. Declare with a FUNCTION KEYWORD, such as makeDoctor.
// Hoisted
function makeDoctor(firstName) {
        return `Dr. ${firstName}`;
}

// 2. ANONYMOUS FUNCTIONS, have no keyword. Won't work alone such as in this excample but are generally good as callback expressions and immediately invoked functions (IIFE).
// - Not hoisted
function (firstName) {
  return `Dr. ${firstName}`;
}

// 3. FUNCTION EXPRESSIONS, we'll use this way of declaring functions most of teh time.
// These allow us to store function as a value inside of a variable and we can get these functions to run in the same way as a function keyword.
// - Not hoisted
const doctorize = function (firstName) {
        return `Dr. ${firstName}`;
}; // Note we need this semi-colon

// 4. ARROW FUNCTIONS =>
// These are also anonymous functions. Must be inside of a variable.
// They offer a concise syntax
// Not scoped in respect of the 'this' keyword
// Not hoisted
// /* eslint-disable */
// Convert ths standard keyword expression into an arrow function
function cmToMm(cm) {
        const mm = cm * 10;
        return mm;
}
// convert to arrow function
const inchToCM = (inches) => inches * 2.54;

// Another example converting function to arrow function
function add(a, b = 3) {
  const total = a + b;
  return total;
}
// Into an => ARROW FUNCTIOM
const add = (x, y = 3) => x + y;

// Returning an OBJECT with a function
function makeABaby(first, last) {
  const baby = {
    name: `${first} ${last}`,
    age: 0
  }
  return baby;
}
// Into an => ARROW FUNCTIOM
const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

// IIFE EXPRESSIONS
// Immediately Invoked Function Expression
// Wrap an anonymous function inside parantheses, pass a value for the function and an IIFE will run it immediately
// Not so popular now we can block scope
(function(age) {
  return `You are cool and age ${age}`;
})(10); // passes in the argument 10 to the parameter age

// Methods!!!
const mark = {
  name: 'Mark',
  // Method!
  sayHi: function() {
    console.log(`Hey ${this.name}`);
    return 'Hey Mark';
  },
  // Short hand Method
  yellHi() {
    console.log('HEY MAAAAAARK!');
  },
  // Arrow function
  wisperHi: () => {
    console.log('ssssh no need to yell!');
  }
}

// CALLBACK FUNCTIONS
// Click Callback
const button = document.querySelector('.clickMe');

function handleClick() {
  console.log('Great Clicking!!');
}

button.addEventListener('click', function() {
  console.log('Nice Job!!!');
});

// Timer Callback
setTimeout(() => {
  console.log('DONE! Time to eat!');
}, 1000);// 1sec delay
