const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

// ALL IN ONE - create an event listener and add an anonymous callback function that runs the action when the evet fires
butts.addEventListener('click', function () {
        console.log('Im an anon!');
});

// BEST SOLUTION either this.....
// ALTERNATIVELY - first create a function to handle the action you want to run when the button is clicked
function handleClick() {
        console.log('🐛 IT GOT CLICKED!!!');
}
// then - add the listener and the callback function from above
butts.removeEventListener('click', handleClick);

// .....or this
// arrow function stored as a variable 'hooray' to handle a predefined callback action
const hooray = () => console.log('HOORAY!');
// add listener and the callback function
coolButton.addEventListener('click', hooray);

/** *********************************
 ** working with multiple elements **
 ********************************** */

// Listen on multiple items, select all button elements with a class of buy with querySelectoreAll
const buyButtons = document.querySelectorAll('button.buy');
// but multiple items doesn't allow us to add an event listener method
// we need to loop over them first see line 33

// 'forEach' loops over every individual element and runs a function for all individual items in a node list, it returns an argument for each of the buttons that meets the buyButtons criteria. It returns a variable that we've named called 'buyButton' (singluar) as the placeholder when it's executed.
buyButtons.forEach(function (buyButton) {
        buyButton.addEventListener('click', handleBuyButtonClick);
});

// and this is the callbackfunction, we add a placholder parameter we'll call 'event', we could have called it 'e', or anything. The only reason we've created a variable called 'button' is to prove that we can isolate the properties of the single button we've clicked using the event placeholder parameter. We prove it by consolw logging its textContent.
function handleBuyButtonClick(event) {
        console.log('You CLICKED a single button!');
        const button = event.target;
        console.log(button.textContent);
        // console.log(parseFloat(event.target.dataset.price));
        // console.log(event.target);
        // console.log(event.currentTarget);
        // console.log(event.target === event.currentTarget);
        // Stop this event from bubbling up
        // event.stopPropagation();
}
// Stop propogation stops the listen event from bubbling up to other elements like the window. Capture down, bubble up.

// we actually click on multiple nested elements when we make a click, here's proof with some useful properties we might want later on
window.addEventListener(
        'click',
        function (event) {
                console.log('YOU CLICKED THE WINDOW');
                console.log(event.target);
                console.log(event.type);
                // event.stopPropagation();
                console.log(event.bubbles);
        },
        { capture: true }
);

const photoEl = document.querySelector('.photo');

// in this case 'e' is the parameter placeholder instead of event and we listen for a mousenter (when the mouse enters the img zone). The 'this' keyword is always equal to whatever we're working on (what's left of the dot, in this case photoEL, but doesn't work with an arrow function) But don't use 'this' on event listen callbacks, Instead use e.currentTarget.
photoEl.addEventListener('mouseenter', (e) => {
        console.log(e.currentTarget);
        // console.log(this);
});
