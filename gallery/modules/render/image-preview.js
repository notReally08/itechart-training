'use strict'

var imagePreview = (function () {
  var previewElement = document.querySelector(".sidebar__image-preview_js");

  var previewButton = document.querySelector(".sidebar__show-preview-button_js");

  var linkElement = document.querySelector(".add-image-form-link_js");

  return {
    preparePreview() {
      previewButton.addEventListener("click", function(event) {
        event.preventDefault();

        try {
          formValidate.validate([linkElement]);
        } catch (error) {
          errorHandler.showError("Please fill in all the fields");
          return;
        }

        var xhr = new XMLHttpRequest();

        xhr.onload = function() {
          if (xhr.status === 200) {
            var image = document.createElement("img");

            image.setAttribute("src", linkElement.value.trim());
            image.classList.add("sidebar__image");
            imagePreview.removePreview();
            previewElement.append(image);
          } else {
            errorHandler.showError(xhr.statusText);
          }
        }

        xhr.open('GET', linkElement.value.trim(), true);
        xhr.send();
      });
    },
    removePreview() {
      previewElement.innerHTML = "";
    }
  }
})();