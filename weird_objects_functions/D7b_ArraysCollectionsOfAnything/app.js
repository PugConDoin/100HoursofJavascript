
// an array can take in multiple types of values, numbers , booleans, objects, function expression, string, etc///
var arr = [
    1, 
    false, 
    {
        name: 'Tony',
        address: '111 Main St.'
    },
    function(name) {
        var greeting = 'Hello ';
        console.log(greeting + name);
    },
    "hello"
];

console.log(arr);
arr[3](arr[2].name);

/* this calls the 4th itemin the array which is the function and passines into that function the 3rd item in the array
arr[3]()
*/