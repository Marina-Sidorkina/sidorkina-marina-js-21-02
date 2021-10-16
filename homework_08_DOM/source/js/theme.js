'use strict';

(function () {
  const documentElement = document.documentElement;
  const themeToggleElement = document.querySelector(".theme");

  const changeTheme = (evt) => {
    documentElement.dataset.theme = evt.target.id;
  }

  themeToggleElement.addEventListener("change", changeTheme);

})();

