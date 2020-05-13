var banner = document.querySelector('.banner');
var header = document.querySelector('.header');

if (banner) {
  header.classList.remove('header--home');
} else {
  header.classList.add('header--home');
}