// !!NEVER!! let JavaScript parser decide where to put semi-colons for you. 
// auto semi-colon insertion is not good
// code correctly

// for example in the example below make sure you put the curly braces on the same line as functions, for loops and object or if statements or, automatic semi=colon insertion will add a semi-colon after the return and the code will end!!

function getPerson() {
 
    return {
        firstname: 'Tony'
    }
    
}

console.log(getPerson());