let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.header-container__toggle');
let googleMap = document.querySelector('.address-location__google');

navMain.classList.remove('main-nav--nojs', 'main-nav--opened');
navToggle.classList.remove('header-container__toggle--nojs');
googleMap.classList.remove('address-location__google--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--opened')) {
    navMain.classList.remove('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--opened');
  }
});

navToggle.addEventListener('click', function () {
  if (navToggle.classList.contains('header-container__toggle--closed')) {
    navToggle.classList.remove('header-container__toggle--closed');
    navToggle.classList.add('header-container__toggle--opened');
  } else {
    navToggle.classList.add('header-container__toggle--closed');
    navToggle.classList.remove('header-container__toggle--opened');
  }
});
