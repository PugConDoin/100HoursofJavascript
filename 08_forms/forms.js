const mark = document.querySelector('.mark');

mark.addEventListener('click', function (event) {
        const shouldChangePage = confirm('This website might be malicious!, do you wish to proceed?');
        if (!shouldChangePage) {
                event.preventDefault();
        }
});

// [] is an attribute selector on a seletor method, rather than class '.'
const signupForm = document.querySelector('[name="signup"]');

// add special validation for our form - stop all chads signing up!! Note, name.value is available to us because we have a 'name' attribute of 'name' in our form, so no need to use query selector if we use valid semantic html (not case sensitive)
signupForm.addEventListener('submit', function (event) {
        const name = event.currentTarget.name.value;
        if (name.includes('chad')) {
                alert('Sorry bro');
                event.preventDefault();
        }
});

// let's look at some more listen type events. This function will just log all of our listen events as all as the user entry
function logEvent(event) {
        console.log(event.type);
        console.log(event.currentTarget.value);
}
signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);
// 'keyup'
// 'keydown'
// 'focus'
// 'blur'

// use a button as an input which stays on site, use a link to go offsite. do not use 'a' tags to act as buttons.

const photo = document.querySelector('.photo');

// using the or || and combining a listen event for the enter key together with a click makes it accessible
function handlePhotoClick(event) {
        if (event.type === 'click' || event.key === 'Enter') {
                console.log('You clicked the photo');
        }
}

photo.addEventListener('click', handlePhotoClick);
photo.addEventListener('keyup', handlePhotoClick);
