//OBJECTS AND VARIABLES

var toggleMenu = document.getElementById('toggle-menu'),
    mainNav = document.getElementById('main-nav');

//FUNCTIONS

var showMenu = function() {
    mainNav.classList.toggle('active');
};

//ASIGNING EVENTS

toggleMenu.addEventListener('click', showMenu);