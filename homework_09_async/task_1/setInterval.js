// Реализация через setInterval

const result = document.querySelector(".result__window");
const form = document.querySelector(".form");
const startElement = document.querySelector("#start");
const endElement = document.querySelector("#end");
let id;

let intervalCount = (start, end) => {
  if(start < end) {
    id = setInterval(function() {
      if(start <= end) {
        result.innerText = start;
        start++;
      } else {
        clearInterval(id)
      }
    }, 1000);
  } else {
    id = setInterval(function() {
      if(start >= end) {
        result.innerText = start;
        start--;
      } else {
        clearInterval(id)
      }
    }, 1000);
  }
}

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  clearInterval(id);
  result.innerText = "";
  let start = parseInt(startElement.value, 10);
  let end = parseInt(endElement.value, 10);
  intervalCount(start, end);
})
