
document.addEventListener('DOMContentLoaded', function () {
  var modeSwitch = document.querySelector('.mode-switch');

  modeSwitch.addEventListener('click', function () {
    document.documentElement.classList.toggle('dark');
  });
});

function openModal(){
  let modal= document.querySelector('#modal-window');
  modal.classList.add("showModal");
}

function closeM(){
    let m= document.querySelector('#modal-window');
  m.classList.remove("showModal");
}

document.getElementsByClassName('.mode-switch').onclick = function() {
  document.body.classList.toggle('dark');
}








const SELECTORS = {
  section: '[data-section]',
  scrollTo: '[data-scroll-to]',
  scrollDir: '[data-scroll-dir]' };

const sectionsArray = Array.from(document.querySelectorAll(SELECTORS.section));
const scrollToElements = document.querySelectorAll(SELECTORS.scrollTo);
const scrollDirElements = document.querySelectorAll(SELECTORS.scrollDir);

let currentSectionIndex = 0;

const getScrollTarget = dir => {
  if (dir === 'prev' && currentSectionIndex > 0) {
    currentSectionIndex--;
    return sectionsArray[currentSectionIndex];
  }
  if (dir === 'next' && currentSectionIndex < sectionsArray.length - 1) {
    currentSectionIndex++;
    return sectionsArray[currentSectionIndex];
  }
  return false;
};

scrollDirElements.forEach(el => {
  el.addEventListener('click', () => {
    const direction = el.dataset.scrollDir;
    const target = getScrollTarget(direction);

    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

scrollToElements.forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    const targetId = el.getAttribute('href');
    const target = document.querySelector(targetId);

    if (target) {
      sectionsArray.forEach((section, index) => {
        if (section.id === targetId.replace('#', '')) {
          currentSectionIndex = index;
        }
      });
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});