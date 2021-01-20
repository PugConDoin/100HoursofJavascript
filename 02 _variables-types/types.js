// use eslint-disable to prevent eslint changing code
/* eslint-disable */
/*

S - String
N - Number
O - Object
B - Boolean
N - Null 
U - Undefined
S - 

// #################
// #### STRINGS ####
// #################

Use backticks, double quotes or single quotes
Escape javascript syntax with a backslash eg 'she\'s'

const name = 'mark';
const middle = "nitecoda";
const last = `freeman`;

const sentence = "shes's so \"cool\"";
const sentence2 = `shes's so "cool"`;

const song = `Ohhh

ya

I like
pizza`;

const hello = 'hello my name is ' + name + ". Nice to meet you";

let hello2 = 'hello my name is ';
hello2 = hello2 + name;
hello2 = hello2 + ' Nice to meet you';

const hello = `hello my name is ${name}. Nice to meet you. I am ${1 + 100} years old`;

const html = `
  <div>
    <h2>${name}</h2>
    <p>${hello}</p>
  </div>
`;

document.body.innerHTML = html;


// using typeof in front of something will let us know what type of variable it is 

// #################
// #### STRINGS ####
// #################

// const age = 100.5;
// const name = 'wes';

// const a = 10;
// const b = 20;

#### Run calcs in Javascript #### 

Add +
Subtract -
Multilpy *
Divide /
Modulo % = remainder after integer division
Power **

#### Use Helper Methods to #### 

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
*/

// #################
// #### OBJECTS ####
// #################
/*
// Biggest building blocks in JS
// A collection of properties and values
//
const person = {
  first: 'mark',
  last: 'freenab',
  age: 21
};

// access properties and values using:
// person.first
// person.last
//person.age

// ####################
// # NULL & UNDEFINED #
// ####################

// NULL - value of completely nothing, explicitly set to NULL
// UNDEFINED - has no value - occurs if you try to call a variable that has no value

let dog; 
console.log(dog); = UNDEFINED we've named a value but not defined a value
dog = 'snickers'; = UNDEFINED beacuse we've named a variable bu haven't set the variable


let somethingUndefined; #note: this has to be let because cannot const a variable that has no value
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

// let isDrawing = false;
// let age = 18;
// const ofAge = age > 19; 
// console.log(ofAge); //returns false

// Getting Booleans through Equality - teting if smthg is TRUE or FALSE
// Almost always use triple ===, not double == as this tests for type as well
// === gives a true equality 
// 10 = 10
//'10' is double == to 10
//but
//'10' does not triple === 10
// age = 100;
// let age2 = 100;

// We'll use BOOLEAN and eEQUALITY a lot in flow control


