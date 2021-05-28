'use strict'

var postDescriptionElement = (function () {
  return {
    render(description) {
      var descriptionElement = document.createElement("figcaption");
      descriptionElement.classList.add("gallery__post-description");
      descriptionElement.textContent = description;
      return descriptionElement;
    }
  }
})();