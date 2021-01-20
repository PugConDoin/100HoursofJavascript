// use eslint-disable to prevent eslint changing code
/* eslint-disable */
/*

S - String
N - Number
O - Object
B - Boolean
N - Null 
U - Undefined
S - Symbol

/*########################
### Types of variables ###
########################## 
String
Number
Object
Boolean
Null
Undefined
Symbol

/*#######################
####### STRINGS #########
#######################*/

const firstName = 'Mark'; // contained withgin single quotes,
const lastName = "Freeman"; // double quotes, or
const nickName = `nitecoda`; // backticks

// apostrophes, quotation marks and special characters inside a string may need escaping 
// with a backslash \
const sentence = "Trump was a 'great' President"; //combining quote styles
const sentence2 = 'Boris is a "solid" leader'; // opening and closing apostrophes must match 
const sentence3 = "The English weather is \"Cool\""; // escape apostrophes if not combining
const multiLine = `This is a multi-
line sentence and my brother says
"it's a really easy
way to write 
strings"`; // backticks `` make life a lot easier and we can write across multiple lines
// good for when we use JS later to create HTML in a familiar style

// we can combine string variables using the + operator
// even within declaring it
let hello = 'hello, my name is ' + firstName + ". Nice to meet you"; // we've updated the value of hello later so we'll use let

let hello2 = 'Hey there! You can call me '; // we'll update this variable too, so let
hello2 = hello2 + firstName; // update value of hello2
hello2 = hello2 + '. Nice to meet you'; //update hello2 again

// we can pass variables into strings inside ${}. We can also run calcs using ${}
hello = `hello my name is ${firstName} ${hello2}. I am ${1 + 100} years old`;

const someHtml = `
  <div>
    <h2>${hello2}</h2>
    <p>${nickName}</p>
  </div>
`;
// notice how the the above someHtml takes in multiple variables on different lines,
// and how these variables cascade through the updates of their values

// we can actually use the variable someHtml to create some HTML elements in the DOM
document.body.innerHTML = someHtml
// and this will translate to web page in the browser for the user. Pretty cool.

const javaSCript = `pretty cool, eh?!`;

/*#######################
####### NUMBERS #########
#######################*/

const age = 21; // a number does not take in apostrophes
const sport = 'football'; // string do
const favoriteNumber = '10' // is a string, it is not a number, because of the apostrophes

console.log(typeof age); // will output number to the console 
console.log(typeof favoriteNumber); // will output string to the console 

//Arithmatic operators
/* 

+   Addition
-   Subtraction
*   Multiplication   
/   Division
**  Exponential
%   Modulus (division remainder)
++  Increment
--  Decrement

*/

const a = 10;
const b = 20;
const c = 2;
const d = 3;
let e = 1; // this value gets incremented later so must be let 
let f = 7;

const addition = a + b;
const subtraction = a - b;
const multiplication = a * b;
const division = b / a;
const exponential = a ** c;
const modulus = a % d;
const increment = e++; // increment
const decrement = --f;// a--; // decrement

// #### Use Helper Methods to #### 

Math.round = rounds up or down based on number
Math.floor = always rounds down
Math.ceil = always rounds up
Math.random() = random number between 0 and 1

//Modulo operations example

const smarties = 20;
const kids = 3;
const eachKidGets = Math.floor(smarties / kids);
const dadGets = smarties % kids;
console.log(`Each kids gets ${eachKidGets}`);

const price = 1034;


/*#################
##### OBJECTS #####
#################*/

// Biggest building blocks in JS
//A collection of properties and values

const person = {
  first: 'mark',
  last: 'freenab',
  age: 21
};

// access properties and values using:
person.first
person.last
person.age

/*####################
## NULL & UNDEFINED ##
####################*/

// NULL - value of completely nothing, explicitly set to NULL
// UNDEFINED - has no value - occurs if you try to call a variable that has no value

let dog; 
console.log(dog); = UNDEFINED we've named a value but not defined a value
dog = 'snickers'; = UNDEFINED beacuse we've named a variable bu haven't set the variable


let somethingUndefined; //note: this has to be let because cannot const a variable that has no value
const somethingNull = null;

const cher = {
  first: 'cher'
};

//last name is indefined, doesn't exist.

const teller = {
  first: 'Raymond',
  last: 'Teller'
}

teller.first = 'Teller';
teller.last = null; //explicity set to NULL

*/
// #################
// #### BOOLEAN ####
// #################

// We use Booleans to test if something is true or false

let isDrawing = false;
let age = 18;
const ofAge = age > 19; 
console.log(ofAge); //returns false

// Booleans results through Equality - teting if smthg is TRUE or FALSE
// Almost always use triple ===, not double == as this tests for type as well
// === gives a true equality 
//10 = 10
//'10' is double == to 10
//but
//'10' does not triple === 10
// age = 100;
// let age2 = 100;

// We'll use BOOLEAN and EQUALITY a lot in flow control


