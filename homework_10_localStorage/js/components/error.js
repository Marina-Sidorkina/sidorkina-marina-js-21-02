const errorElement = document.querySelector('.error');

export const showErrorElement = () => {
  errorElement.style.display = "block";
}

export const hideErrorElement = () => {
  errorElement.style.display = "none";
}
