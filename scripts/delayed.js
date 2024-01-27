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
toggle.addEventListener('click', function(){
 tray.classList.toggle('collapsed');
});