var slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("gallery__slides");

	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}

	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	slides[slideIndex-1].style.display = "block";

	
}

var prev = document.querySelector(".gallery__prev");

prev.onclick = function() {
	var slideInfo = +prev.getAttribute("data-slide");
	showSlides(slideIndex += slideInfo);
}

var next = document.querySelector(".gallery__next");

next.onclick = function() {
	var slideInfo1 = +next.getAttribute("data-slide");
	showSlides(slideIndex += slideInfo1);
}