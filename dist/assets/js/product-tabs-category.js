var tabsLinks = document.querySelectorAll('.tabs__link');
var tabsItem = document.querySelectorAll('.tabs__item');
var tabsSvg = document.querySelectorAll('.tabs__svg');
var tabsId, tabsNavigation;

for (var i = 0; i < tabsLinks.length; i++) {
  tabsLinks[i].onclick = function (event) {
    event.preventDefault();

    tabsId = this.getAttribute('data-tabs');

    tabsNavigation = document.querySelector('.tabs__navigation').children;

    for (var k = 0; k < tabsNavigation.length; k++) {
      tabsNavigation[k].classList.remove('selected');
    }

    for (var j = 0; j < tabsItem.length; j++) {
      tabsItem[j].style.display='none';
    }

    for (var n = 0; n < tabsSvg.length; n++) {
      tabsSvg[n].classList.remove('picked');
    }
    
    document.getElementById(tabsId).style.display = 'block'; 
    this.classList.add('selected');
    this.firstElementChild.classList.add('picked');
  }
}