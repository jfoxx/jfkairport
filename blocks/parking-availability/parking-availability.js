(function cityForm() {
  fetch('https://prod-62.westus.logic.azure.com/workflows/ef989ab7c1ba45a79485e9841b0306aa/triggers/manual/paths/invoke/api/parking?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=SjkjItnIJJOPoCzBzIzmTjVDZafXL4BbMm5dqSBj9IA')
    .then((response) => response.json())
    .then((json) => {
      const target = document.querySelector('div.parking-availability-wrapper');
      const terminalParking = document.createElement('div');
      terminalParking.className = 'terminal-parking';
      const t1 = document.createElement('ul');
      const t1Icon = document.createElement('li');
      const t1Label = document.createElement('li');
      const t1Status = document.createElement('li');
      t1Label.innerText = 'Terminal 1';
      t1Status.innerHTML = 'Closed <small>(Use Terminal 8 Red Lot)</small>';
      t1.append(t1Icon, t1Label, t1Status);
      const t4 = document.createElement('ul');
      const t4Icon = document.createElement('li');
      t4Icon.innerHTML = '<span class="terminal-icon blue">4</span>';
      const t4Label = document.createElement('li');
      const t4Status = document.createElement('li');
      t4Label.innerHTML = `Terminal 4 <small>${json[4].color} Lot</small>`;
      t4Status.innerHTML = `<div class='meter'><span style='width:${json[4].percentageOccupied}%;background-color:${json[4].percentageColor}'></span><p>${json[4].percentageOccupied}% Full</p></div>`;
      t4.append(t4Icon, t4Label, t4Status);
      const t5 = document.createElement('ul');
      const t5Icon = document.createElement('li');
      t5Icon.innerHTML = '<span class="terminal-icon yellow">5</span>';
      const t5Label = document.createElement('li');
      const t5Status = document.createElement('li');
      t5Label.innerHTML = `Terminal 5 <small>${json[1].color} Lot</small>`;
      t5Status.innerHTML = `<div class='meter'><span style='width:${json[1].percentageOccupied}%;background-color:${json[1].percentageColor}'></span><p>${json[1].percentageOccupied}% Full</p></div>`;
      t5.append(t5Icon, t5Label, t5Status);
      const t7 = document.createElement('ul');
      const t7Icon = document.createElement('li');
      t7Icon.innerHTML = '<span class="terminal-icon orange">7</span>';
      const t7Label = document.createElement('li');
      const t7Status = document.createElement('li');
      t7Label.innerHTML = `Terminal 7 <small>${json[2].color} Lot</small>`;
      t7Status.innerHTML = 'Closed except Limited Prebook --Effective May 17, 2023';
      t7.append(t7Icon, t7Label, t7Status);
      const t8 = document.createElement('ul');
      const t8Icon = document.createElement('li');
      t8Icon.innerHTML = '<span class="terminal-icon red">8</span>';
      const t8Label = document.createElement('li');
      const t8Status = document.createElement('li');
      t8Label.innerHTML = `Terminal 8 <small>${json[0].color} Lot</small>`;
      t8Status.innerHTML = `<div class='meter'><span style='width:${json[0].percentageOccupied}%;background-color:${json[0].percentageColor}'></span><p>${json[0].percentageOccupied}% Full</p></div>`;
      t8.append(t8Icon, t8Label, t8Status);
      terminalParking.append(t1, t4, t5, t7, t8);
      target.replaceWith(terminalParking);
    });
}());