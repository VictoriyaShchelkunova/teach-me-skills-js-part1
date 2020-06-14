const table = [
    {
      name: 'Vitalik',
      surName: 'Petrov',
      age: 11,
      phones: [11111],
    }, {
      name: 'Valeriy',
      age: 51,
      phones: [1111, 2222],
    }, {
      name: 'Kate',
      surName: 'Ivanova',
      age: 20,
      phones: [111111, 22222, 333333],
    }, {
      name: 'Lera',
      surName: 'Kuznetsova',
      age: 110,
      phones: [77777777],
    }, {
      name: 'Alex',
      age: 5,
      phones: [555555, 666666],
    }
  ];
  
  const tableElement = document.createElement('table');
  document.body.prepend(tableElement);
  
  tableElement.style.cssText = 'width: 800px; border: 1px solid black; font-family: Arial; font-size: 14px;';
  
  
  const thead = document.createElement('thead');
  tableElement.append(thead);
  
  
  const theadColumns = Object.keys(table[0]);
  
  theadColumns.forEach(columnName => {
    const th = document.createElement('th');
  
    columnName = columnName.toLowerCase();
    columnName = columnName[0].toUpperCase() + columnName.slice(1);
  
    th.innerText = columnName;
    thead.append(th);
    th.style.cssText = 'border: 1px double black;';
  
  });
  
  const tbody = document.createElement('tbody');
  tableElement.append(tbody);
  
  for (let i = 0; i < table.length; i++) {
    const tr = document.createElement('tr');
    tableElement.append(tr);
  
  
    for (let j = 0; j < theadColumns.length; j++) {
      const td = document.createElement('td');
  
      if (table[i][theadColumns[j]]) {
        if (theadColumns[j] === 'phones') {
          if (table[i].phones.length === 1) {
            td.innerText = table[i].phones[0];
            tr.append(td);
            td.style.cssText = 'border: 1px double black; color: yellow';
          } else {
            const ul = document.createElement('ul');
            td.append(ul);
            for (let n = 0; n < table[i].phones.length; n++) {
              const li = document.createElement('li');
              li.innerText = table[i].phones[n];
              ul.append(li);
              tr.append(td);
              td.style.cssText = 'border: 1px double black; color: blue';
  
            }
          }
          continue;
        }
        td.innerText = table[i][theadColumns[j]];
      };
  
      tr.append(td);
      td.style.cssText = 'border: 1px double black;';
  
      if (theadColumns[j] === 'name') {
        td.style.textAlign = 'center';
      }
  
    }
  }
  
  const frstColumn = document.querySelectorAll("td:first-child");
  for (let i = 0; i < frstColumn.length; i++) {
    if (!frstColumn[i].nextElementSibling.innerText) {
      frstColumn[i].setAttribute('colspan', '2');
      frstColumn[i].nextElementSibling.remove();
    }
  };
  
  const lastColumn = document.querySelector("th:last-child");
  lastColumn.style.width = '90px';
  
  const secondColumn = document.querySelector("th:nth-child(2)");
  secondColumn.style.width = '300px';
  
  
  const penultColumn = document.querySelector("th:nth-child(3)");
  penultColumn.style.width = '60px';
  
  const redElements = document.querySelectorAll("[colspan = '2']");
  for (let i = 0; i < redElements.length; i++) {
    redElements[i].style.color = 'red';
  };
  