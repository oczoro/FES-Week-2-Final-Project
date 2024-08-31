let lastOpenedFAQ = null;

function expandFAQ(event) {
  if (lastOpenedFAQ == event) lastOpenedFAQ = null;
  if (lastOpenedFAQ) lastOpenedFAQ.children[1].classList.add('hidden');

  event.children[1].classList.toggle('hidden');
  lastOpenedFAQ = event;
}
