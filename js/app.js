/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/
document.addEventListener('DOMContentLoaded', () => {
/**
 * Define Global Variables
 * 
*/
const nav = document.getElementById('navbar__list');

/**
 * End Global Variables
 * 
*/

/**

 * Begin Main Functions
 * 
*/

// build the nav
// Creates a set amount of Navbar Buttons in an unordered list, adds an anchor tag and class for both
let navItems = ["Product", "About", "Expertise"];
function createNavs(){
  for (let i = 0; i < navItems.length; i++) {
    let itemName = navItems[i];
    let li = document.createElement('li');
    let anchor = document.createElement('a');
    li.classList.add("nav-link" + (i + 1));
    anchor.innerHTML = itemName;
    anchor.href = "#section" + (i + 1);
    anchor.classList.add("anchor" + (i + 1));
    li.appendChild(anchor);
    nav.appendChild(li);

  }
}
createNavs()


//Scroll class and style changes*************************
//Variables for scroll and navbar-changes section

const one = document.getElementById('section1');
const two = document.getElementById('section2');
const three = document.getElementById('section3');

const navOne = document.querySelector('.nav-link1');
const navTwo = document.querySelector('.nav-link2');
const navThree = document.querySelector('.nav-link3');

// Nav Link changes background colour when section is scrolled-to
// Add class 'your-active-class' to section when near top of viewport
window.addEventListener('scroll', function(){

  if (one.getBoundingClientRect().top < window.innerHeight - 500){
    two.classList.remove("your-active-class");
    three.classList.remove("your-active-class");
    one.classList.add("your-active-class");

    navOne.setAttribute("style", "background-color: rgba(0,0,0,0.3);")
    navTwo.setAttribute("style", "background-color: none;")
    navThree.setAttribute("style", "background-color: none;")
  }
  if (two.getBoundingClientRect().top < window.innerHeight - 500){
    one.classList.remove("your-active-class");
    three.classList.remove("your-active-class");
    two.classList.add("your-active-class");

    navTwo.setAttribute("style", "background-color: rgba(0,0,0,0.3);")
    navOne.setAttribute("style", "background-color: none;")
    navThree.setAttribute("style", "background-color: none;")
  }
  if (three.getBoundingClientRect().top < window.innerHeight - 500){
    one.classList.remove("your-active-class");
    two.classList.remove("your-active-class");
    three.classList.add("your-active-class");

    navThree.setAttribute("style", "background-color: rgba(0,0,0,0.3);")
    navTwo.setAttribute("style", "background-color: none;")
    navOne.setAttribute("style", "background-color: none;")
    
  }

});



/**
 * End Main Functions
 * 
*/






})