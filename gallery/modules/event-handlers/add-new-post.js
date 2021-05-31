'use strict'

var addNew = (function () {
  return {
    addNewPost(author, imageUrl, description) {
      var xhr = new XMLHttpRequest();

      xhr.responseType = "blob";

      xhr.onload = function() {
        if (xhr.status === 200) {
        var record = {
          author,
          url: xhr.response,
          description
        }

        successHandler.showMessage("Post successfully added!")
        addRecord.newRecord("gallery", "posts", record, "readwrite");
        } else {
          errorHandler.showError(xhr.statusText);
        }
      }

      xhr.open('GET', imageUrl, true);
      xhr.send();
    }
  }
})();