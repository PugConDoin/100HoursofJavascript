/*########################
####### FUNCTIONS ########
#########################*/

// group together sets of statements in a function 
// functions take in arguments and perform work, which is a statement


/*####################################
### EXAMPLES OF BUILT IN FUNCTIONS ###
####################################*/

/* 
Math.max() is the function, 
10 and 12 are the arguments, 
the entire line is a statement, 
ended and instructed to run by the semi-colon. 
*/

console.log('I am an argument for a function, output to the console');
Math.max(10,12); //12 
Math.floor (2.4444); // 2 - always rounds down to ineteger
Math.ceil(7.65432); // 8 - always rounds up to integer
Math.round(6.836745); // 7 - rounds to nearest integer
Math.random(); // doesn't need an argument, returns random number between 0 and 1
parseFloat('1.234567'); // parses a string to a NUMBER
parseInt('1.234567'); // parses a string to an INTEGER (whole number)
Date.now() // doesn't need an argument, returns epoch time in milliseconds which we convert to date 

// set a variable p that looks for the first 'p' tag
const p = document.querySelector('p'); 
console.log(p); // log the tag and its contents to the console