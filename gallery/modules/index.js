'use strict'

var createGallery = (function () {
  createDB.newDB("gallery", "posts", "id");
  imagePreview.preparePreview();
})();