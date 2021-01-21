/*########################
####### FUNCTIONS ########
#########################*/

/* 
NOTE: FUNCTIONS, ARGUMENTS and PARAMETERS
A parameter is a named variable passed into a function. Parameter variables are used to import arguments into functions.

*****
We can pass values inside the parantheses of a function(); in turn the function will perform its actions using these inputs.

If, when we define a function, we allocate variables inside the parantheses, these are known as PARAMETERS. Think of them as placeholders.

When we come to run the function, we assign values to those parameters. The values we set are known as ARGUMENTS.

PARAMETERS are the variables of a function, ARGUMENTS are the values (or expressions) we pass into them.
*****

EXAMPLE
Let's say, we define a FUNCTION named multiply which will take in two values. We don't know what they are yet so we'll set them as variables x and y. x and y are now the PARAMETERS of the function multiply. We can think of them as placeholders. 
When we come to run the function, we take known values or expressions, let's say 2 and 3, and pass them into the function in place of the parameter. The values we pass into the function are known as ARGUMENTS.  

#####
x and y are the PARAMETERS:
#####
function multiply(x,y) {
  return x * y;
}

#####
2 and 3 are the ARGUMENTS we'll pass for the function to run
#####
function (2,3);

/*####################################
### CUSTOM FUNCTIONS ###
####################################*/

console.log('it works!');

// make a function to calculate bill total

// Function Definition, give the function a name calculateBill and arguments
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  // taxRate and tipRate are assigned default values if they aren't input later
  // this is the function body
  console.log('Running Calculate Bill!!');
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}

// set values to variables that van be passes as arguments into a function 
const markTotal = 200; // variable can be used as argument 1
const ukTaxRate = 0.2; // variable can be used as argument 2
// Function Call. Or **Run**
const myTotal = calculateBill(markTotal, ukTaxRate);
/* runs the function calculateBill using my arguments 1 and 2, 
passed as billAmounut and taxRate
note: we didn't set a tip so defaults to 0.15
*/
console.log(`Your total bill is £${myTotal}.`);  // total only
/* this uses a string interpolation inside a string literal
to take in the variable and output a message */

/* we can even run functions inside of an interperlated string,
 passing in*/
// numbers as the value for the arguments
console.log(`Your bill with default tax and tip is £${calculateBill(100)}.`); 
// or variables as the value for the arguments
console.log(`Your total bill with your chosen tax rate is £${calculateBill(markTotal, ukTaxRate)}.`); 


/*#########################
#### ANOTHER EXAMPLE ######
#########################*/

// Function Definition
function sayHiTo(firstName) {
  return `Hello ${firstName}`;
  // will not return anything unless you pass in an argument
}

const greeting = sayHiTo('Mark'); 
/* sets a new variable 'greeting' with a value sayHiTo() which 
is actually a function, that will run when the variable is called 
the function is passed the argument value of 'Mark' in this case.
*/
console.log(greeting);
// logs Hello Mark, but
// if we hadn't set an argument, the log would be 'Hello undefined'

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name = 'Silly Goose') {
  return `HEY ${name.toUpperCase()}`;
}