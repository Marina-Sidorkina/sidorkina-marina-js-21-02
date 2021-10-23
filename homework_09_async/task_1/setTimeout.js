// Реализация через setTimeout

const result = document.querySelector(".result__window");
const form = document.querySelector(".form");
const startElement = document.querySelector("#start");
const endElement = document.querySelector("#end");
let id;

let timeoutCount = (start, end) => {
  if(start < end) {
    id = setTimeout(function changeValue(start, end) {
      if(start <= end) {
        result.innerText = start;
        start++
        id = setTimeout(changeValue, 1000, start, end);
      } else {
        clearTimeout(id)
      }
    }, 1000, start, end);
  } else {
    id = setTimeout(function changeValue(start, end) {
      if(start >= end) {
        result.innerText = start;
        start--
        id = setTimeout(changeValue, 1000, start, end);
      } else {
        clearTimeout(id)
      }
    }, 1000, start, end);
  }
}

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  clearTimeout(id);
  result.innerText = "";
  let start = parseInt(startElement.value, 10);
  let end = parseInt(endElement.value, 10);
  timeoutCount(start, end);
})
