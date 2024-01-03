export default function decorate(block) {
  const tabs = [...block.children];
  block.classList.add(`tabs-${tabs.length}-tabs`);
  const tabControls = document.createElement('ul');
  tabControls.className = 'tab-controls';
  const tabContents = document.createElement('ul');
  tabContents.className = 'tab-contents';

  // setup image columns
  [...block.children].forEach((i) => {
    const tabLabel = i.firstElementChild.innerText;
    const tabId = tabLabel.toLowerCase().replace(' ', '-');
    const tabContent = i.lastElementChild.innerHTML;
    const controlsLi = document.createElement('li');
    const contentsLi = document.createElement('li');
    controlsLi.setAttribute('data-tab', tabId);
    controlsLi.innerText = tabLabel;
    contentsLi.id = tabId;
    contentsLi.innerHTML = tabContent;
    tabControls.append(controlsLi);
    tabContents.append(contentsLi);
  });
  block.textContent = '';
  block.append(tabControls, tabContents);
  tabControls.firstElementChild.classList.add('active');
  tabContents.firstElementChild.classList.add('active');
}
