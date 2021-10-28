const imgArr = localStorage.getItem("imgArr") ? JSON.parse(localStorage.getItem("imgArr")) : [];

export const processImgArr = (callback) => {
  imgArr.forEach(callback);
}

export const updateImgArr = (data) => {
  imgArr.push(data);
}

export const updateLocalStorage = () => {
  localStorage.setItem("imgArr", JSON.stringify(imgArr));
}
