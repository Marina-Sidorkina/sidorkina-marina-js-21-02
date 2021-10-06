'use strict';

(function () {
  const tasksList = document.querySelector(".tasks");

  const showTask = (evt) => {
    if(evt.target.classList.contains("task__button")) {
      window.tasks[evt.target.id]();
    }
  }

  tasksList.addEventListener("click", showTask);
})();
