'use strict'

var getPost = (function () {
  return {
    getAll() {
      return getFromDB.getAll("gallery", "posts");
    }
  }
})();