'use strict';

(function () {

  const tableElement = document.querySelector(".table__body");

  let records = [
    ["Иванов Иван Иванович", "+7 777 777-77-77"],
    ["Петров Петр Петрович", "+7 777 777-77-77"],
  ];

  const appendNewRecordsElement = (newRecord) => {
    tableElement.appendChild(newRecord);
  }

  const updateRecordsElements = () => {
    const newElementsList = document.createDocumentFragment();
    records.forEach((record, index) => newElementsList
      .appendChild(window.createNewDomElement.create(record[0], record[1], index + 1)));
    tableElement.innerHTML = "";
    tableElement.appendChild(newElementsList);
  }

  const removeRecordsItem = (index) => {
    records.splice(index, 1);
    updateRecordsElements();
  }

  const onTrashClick = (evt) => {
    if(evt.target.classList.contains(("table__trash"))) {
      removeRecordsItem(parseInt(evt.target.dataset.row, 10) - 1);
      updateRecordsElements();
    }
  }

  tableElement.addEventListener("click", onTrashClick);

  window.records = {
    items: records,
    appendNewRecordsElement: appendNewRecordsElement
  }
})();
