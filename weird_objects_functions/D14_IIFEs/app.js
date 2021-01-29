// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS
// we immediately invoke the function after creating it.

// function statement
function greet(name) {
    console.log('Hello ' + name);   
}
greet('John');

// using a function expression
var greetFunc = function(name) {
    console.log('Hello ' + name);
};
greetFunc('John');

// using an Immediately Invoked Function Expression (IIFE)
var greeting = function(name) {
    
    return 'Hello ' + name;
// it's the same as a function expresiion but we invoke it immediately with this line of code ('John); Instead of calling it later with greeting('John'); - it's all odne in one, immediately after creating it!   
}('John');

console.log(greeting);

// IIFE
var firstname = 'John';

//anything inside parenthesis is an expression
(function(name) {
    
    var greeting = 'Inside IIFE: Hello';
    console.log(greeting + ' ' + name);
    
}(firstname)); // IIFE

// IIFE's are a major tool in modern JavaScript!!!! Remember this!!!!!
