let lastOpenedFAQ = null;

function expandFAQ(event) {
  if (lastOpenedFAQ == event) lastOpenedFAQ = null;
  if (lastOpenedFAQ) lastOpenedFAQ.children[1].classList.add('hidden');

  event.children[1].classList.toggle('hidden');
  lastOpenedFAQ = event;
}

const mobileNav = document.querySelector('.nav--mobile');
const hamburgerIcon = document.querySelector('.nav__menu-icon--hamburger');
const crossIcon = document.querySelector('.nav__menu-icon--cross');
function toggleNavMenu() {
  mobileNav.classList.toggle('nav--hidden');
  hamburgerIcon.classList.toggle('nav__menu-icon--hidden');
  crossIcon.classList.toggle('nav__menu-icon--hidden');
}

document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  });

  const allAnimatedElements = document.querySelectorAll('.animate');

  allAnimatedElements.forEach((el) => {
    observer.observe(el);
  });
});
