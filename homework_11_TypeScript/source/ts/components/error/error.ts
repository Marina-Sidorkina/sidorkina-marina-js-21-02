const errorElement: HTMLElement = document.querySelector(".error");

export const showErrorElement = (): void => {
  errorElement.classList.remove("error_disabled");
}

export const hideErrorElement = (): void => {
  errorElement.classList.add("error_disabled");
}
