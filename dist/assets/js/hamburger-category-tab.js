var hamburgerLinks = document.getElementsByClassName('hamburger__nav-link');

for (var i = 0; i < hamburgerLinks.length; i++) {
  hamburgerLinks[i].onclick = hamburgerTab;
}

function hamburgerTab(event) {
  event.preventDefault();
  hamburgerItemId = event.target.getAttribute("data-tab");

  var hamburgerContent = document.getElementsByClassName("hamburger__section");
  
  for (var i = 0; i <  hamburgerContent.length; i++) {
    hamburgerContent[i].classList.remove('active');
  }

  var hamburgerLinks = document.getElementsByClassName("hamburger__nav-link");

  for (i = 0; i < hamburgerLinks.length; i++) {
    hamburgerLinks[i].classList.remove('picked');
  }

  document.getElementById(hamburgerItemId).classList.add("active");
  event.currentTarget.classList.add('picked');
}
