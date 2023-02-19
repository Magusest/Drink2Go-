const swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

const mainNav = document.querySelector('.main-nav__pages-list');
const navToggle = document.querySelector('.main-nav__button');

navToggle.addEventListener('click', function () {
    if (mainNav.classList.contains('main-nav__pages-list--close')) {
      mainNav.classList.remove('main-nav__pages-list--close');
      mainNav.classList.add('main-nav__pages-list--open');
    } else {
      mainNav.classList.remove('main-nav__pages-list--open');
      mainNav.classList.add('main-nav__pages-list--close');
    }
  });

  const map = L.map('map-canvas').setView([51.505, -0.09], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

