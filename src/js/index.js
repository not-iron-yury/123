import TransferElements from './modules/transfer-nav.js';
import productQuantity from './modules/product-quantity.js';
import mobileNavOpenClose from './modules/mobile-nav.js';

mobileNavOpenClose();
productQuantity();

new TransferElements({
  sourceElement: document.querySelector('.nav__list_top'),
  breakpoints: {
    960: {
      targetElement: document.querySelector('.header__nav_bottom'),
      targetPosition: 1,
    },
  },
});
