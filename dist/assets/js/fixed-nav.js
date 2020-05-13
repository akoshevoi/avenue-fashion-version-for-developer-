var initialWidthDocument = window.innerWidth;
var header = document.querySelector('.header');
var topPlace = document.querySelector('.top-place');
var hamburger = document.querySelector('.hamburger');
var introHeight;

if (document.querySelector('.intro')) {
  introHeight = document.querySelector('.intro').offsetHeight;
} else {
  introHeight = document.querySelector('.banner').offsetHeight;
}

function toggleFixedNav() {
  var scrollOffset = this.scrollY;

  if (scrollOffset > introHeight) {
    hamburger.style.display = 'block';
  } else {
    hamburger.style.display = 'none';
  }
}

if (initialWidthDocument > 1199) {
  window.addEventListener('scroll', toggleFixedNav)
} 

window.addEventListener('resize', function() {
  var widthDocument = window.innerWidth;
    if (widthDocument > 1199) {
      hamburger.style.display = 'none';
      window.addEventListener('scroll', toggleFixedNav); 
    } else {
      hamburger.style.display = 'block';
      window.removeEventListener('scroll', toggleFixedNav);
    }
})