const onBurgerButton = () => {
  const mainNav = document.querySelector('.main-nav__pages-list');
  const navToggle = document.querySelector('main-nav__button');

  navToggle.addEventListener('click', function () {
      if (mainNav.classList.contains('main-nav__pages-list--close')) {
        mainNav.classList.remove('main-nav__pages-list--close');
        mainNav.classList.add('main-nav__pages-list--open');
      } else {
        mainNav.classList.remove('main-nav__pages-list--open');
        mainNav.classList.add('main-nav__pages-list--close');
      }
    });
}

export { onBurgerButton }
