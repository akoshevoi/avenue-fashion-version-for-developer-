var hideElements = document.getElementsByClassName('hamburger-hide-element');
var btnCloseModal = document.getElementById('modal-close');
var btnShowModal = document.getElementById('modal-open');
var modal = document.querySelector('.hamburger__modal');
var input = document.querySelector('.hamburger__input');

function showModal() {
  modal.classList.toggle('show');
  input.focus();  

  for (var i = 0; i < hideElements.length; i++) {
    var condition = !hideElements[i].classList.contains('hamburger__form-hide');

    if (condition) {
      hideElements[i].style.visibility = 'hidden';
    }
  }
}

btnShowModal.onclick = showModal;

function closeModal(event) {
  event.preventDefault();

  modal.classList.remove('show');

  for (var i = 0; i < hideElements.length; i++) {
    var condition = !hideElements[i].classList.contains('hamburger__form-hide');
    
    if (condition) {
      hideElements[i].style.visibility = 'visible';
    }
  }
}

btnCloseModal.onclick = closeModal;

window.onclick = function(event) {
  var value = event.target;
  var conditionModalClose = value.classList.contains('hamburger__modal');
    
  if (conditionModalClose) {
    modal.classList.remove('show');

    for (var i = 0; i < hideElements.length; i++) {
      var conditonException = !hideElements[i].classList.contains('hamburger__form-hide');

      if (conditonException) {
        hideElements[i].style.visibility = 'visible';
      }
    }
  }
}