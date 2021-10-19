const formElement = document.querySelector("form");
const inputElement = document.querySelector(".form__input");
const listElement = document.querySelector(".list");
const counterElement = document.querySelector(".form__counter");

const clearCounter = () => {
  counterElement.innerText = "0 images selected";
}

const updateCounter = () => {
  counterElement.innerText = "1 image selected";
}

function addImgToGallery(url) {
  const listItem = document.createElement("li");
  const img = document.createElement("img");
  listItem.classList.add("list__item");
  img.classList.add("list__img");
  img.src = url;
  listItem.append(img)
  listElement.append(listItem);
}

const imgArr = localStorage.getItem("imgArr") ? JSON.parse(localStorage.getItem("imgArr")) : [];

imgArr.forEach(addImgToGallery);

formElement.addEventListener("submit", (evt) => {
  evt.preventDefault();
  if(inputElement.files[0]) {
    uploadBase64UrlToImgBB(inputElement.files[0]);
  }
})

function uploadBase64UrlToImgBB(file) {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    const formData = new FormData();
    formData.set("key", "80aedc5a4b0efabd9ec08280d3f833cc")
    formData.set("image", reader.result.replace(/^.*,/, ""))
    fetch("https://api.imgbb.com/1/upload", {
      method: "POST",
      body: formData
    }).then(response => response.json())
      .then((response) => {
        console.log(response);
        imgArr.push(response.data.display_url);
        localStorage.setItem("imgArr", JSON.stringify(imgArr));
        addImgToGallery(response.data.display_url);
        clearCounter();
      })
      .catch(console.error)
  }
}

inputElement.addEventListener("change", updateCounter);
