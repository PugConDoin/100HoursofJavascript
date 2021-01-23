const people = [
        { name: 'Mark', color: 'Red', hobbies: 'Coding' },
        { name: 'Jen', color: 'Orange', hobbies: 'Reading' },
        { name: 'Illy', color: 'Green', hobbies: 'Gymnastics' },
        { name: 'Kit', color: 'Red', hobbies: 'Football' },
];

people.forEach((person, index) => {
        // debugger; commented out debugger
        console.groupCollapsed(`${person.name}`);
        console.log(person.color);
        console.log(person.hobbies);
        console.log('DONE');
        console.groupEnd(`${person.name}`);
});

console.table(people);

// Console Methods

// Callstack, Stack Trace

// Grabbing Elements

// Breakpoints

// Scope

// Network Requests

// Break On Attribute

// Some Setup Code

function doALotOfStuff() {
        console.group('Doing some stuff');
        console.log('Hey Im one');
        console.warn('watch out!');
        console.error('hey');
        console.groupEnd('Doing some stuff');
}

function doctorize(name) {
        // console.count(`running Doctorize for ${name}`);
        return `Dr. ${name}`;
}

function greet(name) {
        doesntExist(); // Cause an error
        return `Hello ${name}`;
}

function go() {
        const name = doctorize(greet('Wes'));
        console.log(name);
}

function bootstrap() {
        console.log('Starting the app!');
        go();
}

// bootstrap();

const button = document.querySelector('.bigger');
button.addEventListener('click', function (e) {
        const newFontSize = parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
        e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
        const res = await fetch('https://icanhazdadjoke.com/', {
                headers: {
                        Accept: 'text/plain',
                },
        });
        const joke = await res.text();
        console.log(joke);
        return joke;
}
