function mobileNavOpenClose() {
  const navBtn = document.getElementById('burger');
  if (navBtn) {
    const headerBottom = document.querySelector('.header__bottom');

    navBtn.onclick = function () {
      document.body.classList.toggle('no-scroll');
      navBtn.classList.toggle('burger_active');
      headerBottom.classList.toggle('header__bottom_active');
    };
  }
}

export default mobileNavOpenClose;
