var scrollTop = document.querySelector('.scroll-top');
var topPlace = document.querySelector('.top-place');
var hamburger = document.querySelector('.hamburger');
var hamburgerMenu = document.querySelector('.hamburger__menu');
var initialWidthDocument = window.innerWidth;
var intro;
var widthDocument;
var introHeight;

if (document.querySelector('.intro')) {
  introHeight = document.querySelector('.intro').offsetHeight;
  intro = document.querySelector('.intro');
} else {
  introHeight = document.querySelector('.banner').offsetHeight;
  intro = document.querySelector('.banner');
}


function toggleVisisbleScrollTop() {
  var scrollOffset = this.scrollY;
  var condition = hamburgerMenu.classList.contains('open');
  
  if (scrollOffset > introHeight && !condition) {
    scrollTop.classList.add('active');
  } else {
    scrollTop.classList.remove('active');
  }
}

function getWidth() {
  widthDocument = window.innerWidth;
  return widthDocument;
}

window.addEventListener('resize', getWidth)

function scrollTo() {
  if (!widthDocument) {
    if (initialWidthDocument > 1199) {
      topPlace.scrollIntoView({behavior: 'smooth'});
    } else if (initialWidthDocument <= 1199 ) {
      intro.scrollIntoView({behavior: 'smooth'});
    }
  } else {
    if (widthDocument > 1199) {
      topPlace.scrollIntoView({behavior: 'smooth'});
    } else if (widthDocument <= 1199) {
      intro.scrollIntoView({behavior: 'smooth'});
    }
  }
}

scrollTop.onclick = scrollTo;

window.addEventListener('scroll', toggleVisisbleScrollTop); 
