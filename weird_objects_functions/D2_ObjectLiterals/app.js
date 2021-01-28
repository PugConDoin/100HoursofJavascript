var Tony = { 
    firstname: 'Tony', 
    lastname: 'Stark',
    address: {
        street: '111 Main St.',
        city: 'New York',
        state: 'NY'
    }
};

// even though this function uses person, it expects an object that has a firstname property, so it looks inside of the only object that does - Tony and finds 'Tony' as the firstname property/ 
function greet(person) {
    console.log('Hi ' + person.firstname);
}

greet(Tony);

// or we can call the greet function and create a new object on the fly.
greet({ 
    firstname: 'Mary', 
    lastname: 'Doe' 
});

Tony.address2 = {
    street: '333 Second St.'
}

