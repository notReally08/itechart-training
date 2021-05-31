'use strict'

var postContainerElement = (function () {
  return {
    render(imageUrl, author, description) {
      var figure = document.createElement("figure");

      figure.classList.add("gallery__post");
      var imageElement = postImageElement.render(imageUrl);

      var authorElement = postAuthorElement.render(author);

      var descriptionElement = postDescriptionElement.render(description);

      var children = [imageElement, authorElement, descriptionElement];

      for (var i = 0; i < children.length; i++) {
        figure.append(children[i]);
      }

      return figure;
    }
  }
})();