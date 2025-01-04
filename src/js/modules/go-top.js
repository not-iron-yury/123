function goTop() {
  const goTopButton = document.getElementById('gotop-btn');

  goTopButton.addEventListener('click', handlerGoTop);

  function handlerGoTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

export default goTop;
