'use strict'

var successHandler = (function () {
  return {
    showMessage(message) {
      var successMesageElement = document.querySelector(".form-success_js");

      successMesageElement.textContent = message;
      successMesageElement.classList.add("form-success_visibility_visible");

      setTimeout(function() {
        if (successMesageElement.classList.contains("form-success_visibility_visible")) {
          successMesageElement.classList.remove("form-success_visibility_visible");
        }
      }, 2000)
    }
  }
})();