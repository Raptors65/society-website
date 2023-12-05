const navItems = document.querySelector('.nav-items');

document.querySelector('.nav-hamburger-button').addEventListener('click', function() {
  if (navItems.style.display !== 'flex') {
    navItems.style.display = 'flex';
  } else {
    navItems.style.display = '';
  }
});

const concerns = document.querySelectorAll('.concern-title');

for (const concern of concerns) {
  concern.addEventListener('click', function() {
    const description = concern.parentElement.children[1];
    
    if (description.style.display !== 'block') {
      description.style.display = 'block';
      concern.children[1].innerHTML = '&minus;'
    } else {
      description.style.display = '';
      concern.children[1].innerHTML = '+'
    }
  });
}