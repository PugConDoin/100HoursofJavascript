// arguments is another name for the parameters you pass to a function

function greet(firstname, lastname, language) {
    // language is equal to language if it's set, or ||
    // language is equal to 'en' bu default if not
    language = language || 'en';
    
    if (arguments.length === 0) {
        console.log('Missing parameters!');
        console.log('-------------');
        return;
    }
    
    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log(arguments); //arguments is a keyword that contains a list of the vakues of all the aruments that we've passed.
    console.log('arg 0: ' + arguments[0]);
    console.log('-------------');
    
}

greet();
greet('John');
greet('John', 'Doe');
greet('John', 'Doe', 'es');

// in ES6 I can do:  function greet(firstname, ...other)
// and 'other' will be an array that contains the rest of the arguments
