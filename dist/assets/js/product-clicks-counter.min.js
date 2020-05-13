var clicksBtn = document.querySelectorAll('.clicks__btn');
var clicksNumber = document.querySelector('.clicks__number');

for (var i = 0; i < clicksBtn.length; i++ ) {
  clicksBtn[i].onclick = function () {
    if (this.classList.contains('clicks__plus')) {
      clicksNumber.textContent++;
    } else if (this.classList.contains('clicks__minus')) {
      if (clicksNumber.textContent != 1) {
        clicksNumber.textContent--;
      } 
    }
  }
}