'use strict';

(function () {
  const createNewDomElement = (name, tel, num) => {
    const fragment = document.createDocumentFragment();
    const row = document.createElement("tr");
    const numCell = document.createElement("th");
    const nameCell = document.createElement("td");
    const telCell = document.createElement("td");
    const telSpan = document.createElement("span");
    const trashSpan = document.createElement("span");

    row.classList.add("table__row");
    numCell.classList.add("table__cell");
    nameCell.classList.add("table__cell");
    telCell.classList.add("table__cell", "table__cell_tel");
    trashSpan.classList.add("table__trash");
    trashSpan.dataset.row = num;

    numCell.innerText = num;
    nameCell.innerText = name;
    telSpan.innerText = tel;

    telCell.appendChild(telSpan);
    telCell.appendChild(trashSpan);
    row.appendChild(numCell);
    row.appendChild(nameCell);
    row.appendChild(telCell);
    fragment.appendChild(row);

    return row;
  }

  window.createNewDomElement = {
    create: createNewDomElement
  }

})();
