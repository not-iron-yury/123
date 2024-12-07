function productCardToggler() {
  const productCards = document.querySelectorAll('.product-card');
  const productCardsLink = document.querySelectorAll('.product-card__btn');
  console.log(productCardsLink);
  if (productCards.length > 0) {
    productCards.forEach((card, i) => {
      card.addEventListener('click', openDescription);
      card.addEventListener('focus', openDescription);
      card.addEventListener('keydown', keydownNav);
      card.querySelector('.product-card__btn-close').addEventListener('click', closeDescription);
      card.setAttribute('tabindex', '-1');
      productCardsLink[i].setAttribute('tabindex', '-1');
    });
    productCards[0].setAttribute('tabindex', '0');
  }

  function keydownNav(e) {
    let index = Array.prototype.indexOf.call(productCards, e.currentTarget);
    let direction = null;

    if (e.code === 'ArrowLeft') {
      direction = index - 1;
    } else if (e.code === 'ArrowRight') {
      direction = index + 1;
    } else if (e.code === 'ArrowDown') {
      productCardsLink[index].focus();
    }

    if (direction !== null && productCards[direction]) {
      switchCard(productCards[direction], e.currentTarget);
    }
  }

  function switchCard(newCard, currentCard) {
    newCard.focus();

    currenCardsetAttribute('tabindex', '-1');
    newCard.removeAttribute('tabindex');

    currentCard.classList.remove('active');
    newCard.classList.add('active');
  }

  function openDescription(e) {
    for (const card of productCards) {
      card.classList.remove('active');
    }
    e.currentTarget.classList.add('active');
  }

  function closeDescription(e) {
    e.stopPropagation();
    const currentProductCard = e.target.closest('.product-card');
    currentProductCard.classList.remove('active');
  }
}

export default productCardToggler;
