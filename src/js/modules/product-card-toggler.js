function productCardToggler() {
  const productCard = document.querySelectorAll('.product-card');

  if (productCard.length > 0) {
    let key = 0;
    for (const card of productCard) {
      card.addEventListener('click', openDescription);
      card.addEventListener('focus', openDescription);
      card.querySelector('.product-card__btn-close').addEventListener('click', closeDescription);
    }
  }

  function openDescription(e) {
    for (const card of productCard) {
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
