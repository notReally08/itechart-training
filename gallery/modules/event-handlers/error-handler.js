'use strict'

var errorHandler = (function(){
  var errorElement = document.querySelector(".form-error_js");
  
  return {
    showError(errorText) {
      if (!errorElement.classList.contains("form-error_visibility_visible")) {
        errorElement.classList.add("form-error_visibility_visible");
      }

      errorElement.textContent = errorText;

      setTimeout(function() {
        if (errorElement.classList.contains("form-error_visibility_visible")) {
          errorElement.textContent = "";
          errorElement.classList.remove("form-error_visibility_visible");
        }
      }, 2000);
    }
  }
})();