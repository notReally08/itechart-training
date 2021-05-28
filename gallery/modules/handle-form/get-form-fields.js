'use strict'

var form = document.forms[0];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  var author = document.querySelector(".add-image-form-author_js");
  var link = document.querySelector(".add-image-form-link_js");
  var description = document.querySelector(".add-image-form-description_js");

  try {
    formValidate.validate([author, link, description]);
    addNew.addNewPost(author.value, link.value, description.value);
    imagePreview.hidePreview();
  } catch (error) {
    if(error.name !== "ReferenceError") {
      errorHandler.showError("Please fill in all the fields");
    }

    return;
  }
});