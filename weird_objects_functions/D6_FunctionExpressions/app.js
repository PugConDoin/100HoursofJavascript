// functions statements - do work, like an if statement, it just does work, it doesn't return a value. It's just a statement.

// function expression - a unit of code that returns a value. Doesn't need to save inside a variable. a=3 is an expression. 1+2 is an expression. They both return values. Might be a number, string, whatever

if (a===3){

}

greet();

// This is just a function statement, it gets put into memory during the execution phase and is available to be called on but in itself it doesn't return a value, in the execution phase, it isn't being run, it isn't returning a value. This gets HOISTED
function greet() {
    console.log('hi');   
}


// this is a function expression, in this case we set a function object within a variable. The function doesn't need a name because we can referebnce it with the vriable and invole with the variable name. It's an expression because we can invoke the vraiable and when we do the functionw will return a value as part of the same expression. Function expressions are NOT HOISTED.
var anonymousGreet = function() {
    console.log('hi');   
}
// the following invokes the code
anonymousGreet();

// this function 'log' is being passed another function from the code at line 31. The a(); on line 27 is just telling the function to run whatever's passed into the parameter 'a', so it runs the function that it contains.

function log(a) {
   a();    
}

// This passes a function to the log function
log(function() {
    console.log('hi');   
});



