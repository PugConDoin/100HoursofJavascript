// a new execution context is created when a function is exectured, put on the execution stack and this determines how the code is run
// if the function refers to a variable that isn't contained within it will go searching outside of itself up the stack, all the way out to the glabal object environment
// every time an execution context is created, that is, every time a function is run, we also get the special variable called 'this'.
// 'this' points at different objects depending on the circumstance of how the function is run.

// 'this' points to the global object - the window 
console.log(this);

//this will also point to the global object - the window
function y() {
    console.log(this);
}
y()

// this too, it creates a new variable on the global object, the global namespace, not the function!!!!
function a() {
    console.log(this);
    this.newvariable = 'hello';
}

// this too
var b = function() {
    console.log(this);   
}

a();

console.log(newvariable); // not good!

b();

// create a new object literal, with an anonymous function inside, which is known as a method - the log methodof the object 'c'. 
var c = {
    name: 'The c object',
    log: function() {
        var self = this;
        
        self.name = 'Updated c object'; // better than using this.name = 'Updated c object'; because 'this' would refer all the way up to the global object again and not the 'c' object (it's a bug of JS!!), so we assign self to = this in the line above and use self from then on, to force the 'this'to work correctly.... Let clears some of these problems up. Using self = this is common. 
        console.log(self);
        
        var setname = function(newname) {
            self.name = newname;   
        }
        setname('Updated again! The c object');
        console.log(self);
    }
}
// this invokes the function that was created in the object literal
c.log();
// the log method of the object c - a method attached to an object
// what does it return

// the 'this' keyword in this case refers to the object variable 'c' , the function/method is attached to it








