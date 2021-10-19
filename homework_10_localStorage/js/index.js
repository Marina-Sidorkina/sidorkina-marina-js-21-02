const inputElement = document.getElementById("fileInput");
const uploadButtonElement = document.getElementById("uploadButton");
const galleryElement = document.querySelector(".gallery");

function addImgToGallery(url) {
  const img = document.createElement("img");
  img.src = url;
  galleryElement.append(img);
}

const imgArr = localStorage.getItem("imgArr") ? JSON.parse(localStorage.getItem("imgArr")) : [];

imgArr.forEach(addImgToGallery);

uploadButtonElement.addEventListener("click", () => {
  uploadBase64UrlToImgBB(inputElement.files[0]);
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
        localStorage.setItem("imgArr", JSON.stringify(imgArr))
        addImgToGallery(response.data.display_url)
      })
      .catch(console.error)
  }
}
