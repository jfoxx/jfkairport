// eslint-disable-next-line import/no-cycle
import { sampleRUM } from './aem.js';

// Core Web Vitals RUM collection
sampleRUM('cwv');

// add more delayed functionality here
const tabs = document.querySelectorAll('ul.tab-controls > li');
tabs.forEach((i) => {
  const panelId = i.getAttribute('data-tab');
  i.addEventListener('click', () => {
    const siblings = i.closest('ul.tab-controls').querySelectorAll('li');
    const content = i.closest('ul.tab-controls').nextSibling.querySelectorAll('li');
    siblings.forEach((j) => {
      j.classList.remove('active');
    });
    content.forEach((k) => {
      k.classList.remove('active');
    });
    i.classList.add('active');
    const activePanel = document.getElementById(panelId);
    activePanel.classList.add('active');
  });
});

const toggle = document.querySelector('.tray-toggle');
const tray = document.querySelector('.tray');
toggle.addEventListener('click', () => {
  tray.classList.toggle('collapsed');
});

const nextButton = document.querySelector('.slider-wrapper > button.next-button');
const prevButton = document.querySelector('.slider-wrapper > button.prev-button');
const slides = document.querySelectorAll('.slider-wrapper > ul > li');
nextButton.addEventListener('click', () => {
  /* eslint-disable-next-line no-restricted-syntax */
  for (const i of slides) {
    if (i.classList.contains('scrolled')) {
      // do nothing
    } else {
      i.classList.add('scrolled');
      break;
    }
  }
});
prevButton.addEventListener('click', () => {
  /* eslint-disable-next-line no-restricted-syntax */
  for (const i of slides) {
    if (i.classList.contains('scrolled')) {
      if (i.nextElementSibling.classList.contains('scrolled')) {
        // do nothing
      } else {
        i.classList.remove('scrolled');
        break;
      }
    } else {
      // do nothing
    }
  }
});
