/* Author: Lucas Kim
   Date: December 5, 2023
   Description: a website meant to educate others on the implications of AI and how individuals may help reduce the negative effects of AI.

   Implemented challenge features:
     - Dropdown feature: used for the concerns about AI on the home page and for the navbar on mobile
     - "Mouseover" effects: used when hovering over the concerns about AI on the home page prior to expanding or collapsing the sections
     - An element that moves down as the user scrolls down a page: used for the fixed navbar
  
   This particular file is for the JavaScript code of the website, used for the dropdowns. */

// Select the navbar items element
const navItems = document.querySelector('.nav-items');

// Add a click event listener to the hamburger icon
document.querySelector('.nav-hamburger-button').addEventListener('click', function() {
  // If the navbar items are being hidden, display them; otherwise, hide them
  if (navItems.style.display !== 'flex') {
    navItems.style.display = 'flex';
  } else {
    navItems.style.display = '';
  }
});

// Select all concern buttons/titles
const concerns = document.querySelectorAll('.concern-title');

// Loop through the concern titles
for (const concern of concerns) {
  // Add an event listener to expand/collapse the content
  concern.addEventListener('click', function() {
    // Get the description element via the parent element
    const description = concern.parentElement.children[1];
    
    // If the description is being hidden, display it and change the icon to a minus sign; otherwise, hide it and change the icon to a plus sign
    if (description.style.display !== 'block') {
      description.style.display = 'block';
      concern.children[1].innerHTML = '&minus;'
    } else {
      description.style.display = '';
      concern.children[1].innerHTML = '+'
    }
  });
}