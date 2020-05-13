var hamburgerBtn = document.querySelector('.hamburger__btn');
var nav = document.querySelector('.hamburger__menu');
var links = document.querySelectorAll('.hamburger__nav-link');
var scrollTop = document.querySelector('.scroll-top');
var intro;
var introHeight;

if (document.querySelector('.intro')) {
  introHeight = document.querySelector('.intro').offsetHeight;
  intro = document.querySelector('.intro');
} else {
  introHeight = document.querySelector('.banner').offsetHeight;
  intro = document.querySelector('.banner');
}

function getSrollOffset() {
 var scrollOffset = this.scrollY;
  if (scrollOffset > introHeight) {
    return true;
  } else {
    return false;
  }
}

function showHamburgerMenu () {
  nav.classList.toggle('open');
  hamburgerBtn.classList.toggle('open');
  document.body.classList.toggle("stop-scrolling"); 

  var condition = getSrollOffset();
  
  if (condition) {
    scrollTop.classList.toggle('active');
  } 
  
  links.forEach(function fade (link) {
    link.classList.toggle('fade');
  })
}

hamburgerBtn.addEventListener('click', showHamburgerMenu);

window.addEventListener('scroll', getSrollOffset); 