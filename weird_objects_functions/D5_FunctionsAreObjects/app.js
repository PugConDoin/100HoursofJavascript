// in JS functions are objects
// Everything you can do with other 'types' you can do with Functions

// FIRST CLASS FUNCTIONS makes JS very powerful

// a function is a special type of object. You can attach properties and values to a function because it's just another object.

// but functions are special, they don't have to have a name, they can be anonymous

// the code we write to make a function is just another one of its properties. It gets stored in a special location. Function code can be invoked ()


// functions can be moved around, copied and given to other elements of our code, just like a string or a number.

// this can make function syntax looke weird, but understand it's actually just another object/


function greet() {
    console.log('hi');   
}

// we can use dot notation to add properties to it.

// we can add properties to the function greet,just like we would an object 

greet.language = 'english';
console.log(greet.language);

// and it works,it's a function but still an object

