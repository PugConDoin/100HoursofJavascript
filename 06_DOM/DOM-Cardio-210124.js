// Make a div
const wrapper = document.createElement('div');
// add a class of wrapper to it
wrapper.classList.add('wrapper');
// put it into the body
document.body.appendChild(wrapper);

// make an unordered list
// add three list items with the words "one, two, three" in them
const list = `<ul>
  <li>one</li>
  <li>two</li>
  <li>three</li>
</ul>`;
// put that list into the above wrapper
wrapper.innerHTML = list;

// create an image
const image = document.createElement('img');
// set the source to an image
image.src = 'https://picsum.photos/500';
// set the width to 250
image.width = 250;
image.height = 250; // stops image jumping on refresh
// add a class of cute
image.classList.add('cute');
// add an alt of Cute Puppy
image.alt=('Cute Puppy');
// Append that image to the wrapper
wrapper.appendChild(image);

// with HTML string, make a div, with two paragraphs inside of it
const div = `
  <div>
    <p>paragraph one</p>
    <p>paragraph two</p>
  </div>
`;
// put this div before the unordered list from above
const ulElement = wrapper.querySelector('ul'); //first create an element from the HTML text we created.
ulElement.insertAdjacentHTML('beforebegin', div);
// add a class to the second paragraph called warning
const pTags = wrapper.querySelectorAll('p');
const paragraph2 = pTags[1];
paragraph2.classList.add('warning');
// remove the first paragraph
paragraph1 = pTags[0];
paragraph1.remove();

//#####################
//###TME STAMP 2h30 ###
//#####################



// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards

// make 4 player cards using generatePlayerCard

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
