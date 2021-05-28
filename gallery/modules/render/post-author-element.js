'use strict'

var postAuthorElement = (function () {
  return {
    render(author) {
      var authorElement = document.createElement("p");
      authorElement.classList.add("gallery__post-author");
      authorElement.textContent = author;
      
      return authorElement;
    }
  }
})();