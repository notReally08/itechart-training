'use strict'

var formValidate = (function() {
  return {
    validate(fields) {
      for (var i = 0; i < fields.length; i++) {
        if (!fields[i].value.trim()) {
          throw new Error();
        }
      }
    }
  }
})();