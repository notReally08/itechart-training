'use strict'

var postImageElement = (function () {
  return {
    render(imageUrl) {
      var image = document.createElement("img");
      image.classList.add("gallery__post-image");
      image.setAttribute("src", imageUrl);
      image.setAttribute("alt", "Alternative text");
      return image;
    }
  }
})();