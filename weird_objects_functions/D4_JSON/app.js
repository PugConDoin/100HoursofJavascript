// JSON = JavsScript Object Notation

// looks like JS but isn't and is more strict - good for exchanging data and easy toc onvert between the two

// JSON properties MUST be wrapped in quotes
// JSON Object Literal Syntax is valid JavaScript
// But as JS properties don't need to be wrapped in quotes it wouldn't make valid JSON


var objectLiteral = {
    firstname: 'Mary',
    isAProgrammer: true
}

// converts a JS object to a JSON string
console.log(JSON.stringify(objectLiteral));

// converts JSON stringto a JS object
var jsonValue = JSON.parse('{ "firstname": "Mary", "isAProgrammer": true }');

console.log(jsonValue);
