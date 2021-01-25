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
</ul>`
// put that list into the above wrapper
wrapper.innerHTML=(list);

// create an image
const image = document.createElement('img');
// // set the source to an image
image.src='https://picsum.photos/500';
// // set the width to 250
image.width=(250);
image.height=(250);
// // add a class of cute
image.classList.add=('cute');
// // add an alt of Cute Puppy
image.alt='cute puppy';
// Append that image to the wrapper
wrapper.appendChild(image);

//#####################
//# TME STAMP 14m30s ##
//#####################

// with HTML string, make a div, with two paragraphs inside of it
const div = `
  <div>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
  </div>
`;
// put this div before the unordered list from above. 

/*################################################################
// !!!!!!!STUCK ON THIS ONE spent 24mins Without solving !!!!!!!!!
##################################################################
Solution:
1. We want to target the 'list' and use insertAdjacentHTML to place the new 'div' before it.
// But the 'list' we created is not HTML, it's string created from our JavaScript.
2. So, in order to be able to use it how we wnat to, we first need to create a new varianble 'listElement' that targets the 'list' and treats it as an element, so we can use it */
const listElement = document.querySelector('ul');
//3. Now target this new 'listElement' and insert the variable 'div' as adjacent HTML before the begginning of the 'listElement'. 
listElement.insertAdjacentHTML('beforebegin', div);
// beforebegin = before element
// afterbegin = before first child of element
// beforeend = afetr last child of element
// afterend = after element


//#####################
//### START TIMER #####
//#####################

// add a class to the second paragraph called warning
const pTags = document.querySelectorAll('p');
pTags[1].classList.add('warning');
// remove the first paragraph
const para2 = pTags[0];
para2.remove();

//#######################
//## NEW STAMP 12m12s ###
//#######################

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

function generatePlayerCard (name, age, height) {
  const html =`<div class="playerCard">
            <h2>${name} — ${age}</h2>
           <p>The player, ${name}, is ${height} cms tall and ${age} years old. In Dog years this person would be ${age * 7}. That would be a tall dog!</p>
           <button class="delete" type="button">&times; Delete</button>
          </div>`;
          return html;
} 

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');
// make 4 player cards using generatePlayerCard
let cardsHTML = generatePlayerCard('Mark', 46, 180);
cardsHTML += generatePlayerCard('Jen', 35, 170); //keeps original and adds one
cardsHTML += generatePlayerCard('Illy', 11, 110); //keeps original two and adds one
cardsHTML += generatePlayerCard('Kit', 9, 100); // keeps original three and adds one

// append those cards to the div
cards.innerHTML = cardsHTML;
// put the div into the DOM just before the wrapper element
wrapper.insertAdjacentElement('beforebegin', cards);

//#####################
//## TME STAMP xhxx  ##
//#####################

// Bonus, put a delete Button on each card so when you click it, the whole card is removed

//SOLUTION is to add a button in the DIV above see line 88.


// select all the buttons!
const buttons = document.querySelectorAll('.delete');
// make out delete function
function deleteCard(event) {
  const buttonThatGotClicked = event.currentTarget;
  buttonThatGotClicked.closest('.playerCard').remove();
}
// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', deleteCard));

