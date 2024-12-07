function projectCardToggler() {
  const projectCards = document.querySelectorAll('.project-card');
  const projectCardsLink = document.querySelectorAll('.project-card__btn');

  if (projectCards.length > 0) {
    let key = 0;
    projectCards.forEach((card, i) => {
      card.dataset.key = key++;
      card.addEventListener('click', openDescription);
      card.addEventListener('focus', openDescription);
      card.addEventListener('keydown', e => keydownNav(e, card.dataset.key));
      card.querySelector('.project-card__btn-close').addEventListener('click', closeDescription);
      card.setAttribute('tabindex', '-1');
      projectCardsLink[i].setAttribute('tabindex', '-1');
    });
    projectCards[0].setAttribute('tabindex', '0');
  }

  function keydownNav(e, key) {
    let index = Array.prototype.indexOf.call(projectCards, e.currentTarget);
    let direction = null;

    if (e.code === 'ArrowLeft') {
      direction = index - 1;
    } else if (e.code === 'ArrowRight') {
      direction = index + 1;
    } else if (e.code === 'ArrowDown') {
      projectCardsLink[key].focus();
    }

    if (direction !== null && projectCards[direction]) {
      switchCard(projectCards[direction], e.currentTarget);
    }
  }

  function switchCard(newCard, currentCard) {
    newCard.focus();
    currentCard.setAttribute('tabindex', '-1');
    newCard.setAttribute('tabindex', '0');
    currentCard.classList.remove('active');
    newCard.classList.add('active');
  }

  function openDescription(e) {
    for (const card of projectCards) {
      card.classList.remove('active');
    }
    e.currentTarget.classList.add('active');
  }

  function closeDescription(e) {
    e.stopPropagation();
    const currentprojectCard = e.target.closest('.project-card');
    currentprojectCard.classList.remove('active');
  }
}

export default projectCardToggler;
