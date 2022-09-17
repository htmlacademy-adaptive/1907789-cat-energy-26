let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.header-container__toggle');

navMain.classList.remove('main-nav--nojs');
navToggle.classList.remove('header-container__toggle--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
  } else {
    navMain.classList.add('main-nav--closed');
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
