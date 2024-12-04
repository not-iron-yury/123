function productCardToggler() {
  const productCard = document.querySelectorAll('.product-card');

  if (productCard.length > 0) {
    for (const card of productCard) {
      card.onclick = openDescription;
      card.querySelector('.product-card__btn-close').onclick = closeDescription;
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
