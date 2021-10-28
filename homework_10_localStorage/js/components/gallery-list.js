const listElement = document.querySelector(".list");

export function addImg(url) {
  const listItem = document.createElement("li");
  const img = document.createElement("img");
  listItem.classList.add("list__item");
  img.classList.add("list__img");
  img.src = url;
  listItem.append(img)
  listElement.append(listItem);
}
