const errorElement = document.querySelector(".error");

export const showErrorElement = () => {
  errorElement.classList.remove("error_disabled");
}

export const hideErrorElement = () => {
  errorElement.classList.add("error_disabled");
}
