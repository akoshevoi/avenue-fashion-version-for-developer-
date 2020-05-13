var storesBtn = document.querySelectorAll('.stores__btn');

for (var i = 0; i < storesBtn.length; i++) {
  storesBtn[i].onclick = showStore;
}

function showStore (e) {
  e.preventDefault();

  dataAttr = this.getAttribute('data-collapse');
  currentItem = document.getElementById(dataAttr);
  allItem = document.querySelectorAll('.details__store ');

  for (var i = 0; i < allItem.length; i++) {
    allItem[i].classList.remove('active');
  }

  currentItem.classList.add('active');
}