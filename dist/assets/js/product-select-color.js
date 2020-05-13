var selectList = document.querySelectorAll('.select__list');

for (var i = 0; i < selectList.length; i++) {
  selectList[i].onchange = function () {
    this.previousElementSibling.style.display='none';
  }
}
