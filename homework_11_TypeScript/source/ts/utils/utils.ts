export const isNumeric = (value: string) => {
  return /^[\d.]+$/.test(value);
}

export const sortByAlphabet = (first: string, second: string): number => first.localeCompare(second);

export const createNewListItem = (name: string, gender: string, mass: string, height: string, element: HTMLElement): void => {
  const documentFragment: DocumentFragment = document.createDocumentFragment();
  const rowElement: HTMLTableRowElement = document.createElement("tr");
  const nameCellElement: HTMLTableCellElement = document.createElement("td");
  const genderCellElement: HTMLTableCellElement = document.createElement("td");
  const massCellElement: HTMLTableCellElement = document.createElement("td");
  const heightCellElement: HTMLTableCellElement = document.createElement("td");

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
