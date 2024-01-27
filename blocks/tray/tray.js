import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  const wrapper = document.createElement('div');
  wrapper.className = 'slider-wrapper';
  const toggleButton = document.createElement('button');
  toggleButton.className = 'tray-toggle';
  toggleButton.textContent = 'Promotions & News';
  const nextButton = document.createElement('button');
  const prevButton = document.createElement('button');
  nextButton.className = 'next-button';
  prevButton.className = 'prev-button';
  /* change to ul, li */
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    while (row.firstElementChild) li.append(row.firstElementChild);
    const link = li.firstChild.querySelector('a');
    const img = li.lastChild.querySelector('img');
    if (link != null) {
      link.textContent = '';
      link.className = '';
      li.firstChild.replaceWith(link);
    }

    ul.append(li);
  });
  ul.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  wrapper.append(toggleButton, ul, nextButton, prevButton);
  block.textContent = '';
  block.append(wrapper);
}

