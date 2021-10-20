export const isNumeric = (value) => {
  return /^[\d.]+$/.test(value);
}

export const sortByAlphabet = (first, second) => first.localeCompare(second);

export const createNewListItem = (name, gender, mass, height, element) => {
  const documentFragment = document.createDocumentFragment();
  const rowElement = document.createElement("tr");
  const nameCellElement = document.createElement("td");
  const genderCellElement = document.createElement("td");
  const massCellElement = document.createElement("td");
  const heightCellElement = document.createElement("td");

  nameCellElement.innerText = name;
  nameCellElement.classList.add("list__cell");
  genderCellElement.innerText = gender;
  genderCellElement.classList.add("list__cell");
  massCellElement.innerText = mass;
  massCellElement.classList.add("list__cell");
  heightCellElement.innerText = height;
  heightCellElement.classList.add("list__cell");
  rowElement.classList.add("list__row");
  rowElement.appendChild(nameCellElement);
  rowElement.appendChild(genderCellElement);
  rowElement.appendChild(massCellElement);
  rowElement.appendChild(heightCellElement);
  documentFragment.appendChild(rowElement);

  element.appendChild(documentFragment);
}
