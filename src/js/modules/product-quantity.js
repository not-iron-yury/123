function productQuantity() {
  const buttonDecrease = document.querySelector('.quantity__btn-decrease');
  const buttonIncrease = document.querySelector('.quantity__btn-increase');
  const quantityInput = document.querySelector('.quantity__input');

  if (quantityInput) {
    buttonDecrease.onclick = decreaseQuantity;
    buttonIncrease.onclick = increaseQuantity;

    function decreaseQuantity() {
      if (quantityInput.value > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
      }
    }
    function increaseQuantity() {
      quantityInput.value = parseInt(quantityInput.value) + 1;
    }
  }
}

export default productQuantity;
