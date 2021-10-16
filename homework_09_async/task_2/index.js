const messageElement = document.querySelector(".redirect");
const end = 1;

let start = 10;

const changeEnding = (value) => {
  if(value <= 10 && value>= 5) return "секунд";
  if(value <= 5 && value >= 2) return "секунды";
  if(value === 1) return "секунду";
}

let id = setInterval(function() {
  if(start >= end) {
    messageElement.innerText = `Вы будете перенаправлены через ${start} ${changeEnding(start)}...`;
    start--;
  } else {
    clearInterval(id);
    window.location.href = "https://maxima.life";
  }
}, 1000);
