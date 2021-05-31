'use strict'

var addRecord = (function () {
  return {
    newRecord (dbName, store, record, mode = "read") {
      var openDBRequest = indexedDB.open(dbName, 1);

      openDBRequest.onsuccess = (event) => {
        var db = event.target.result;

        var transaction = db.transaction(store, mode);

        var records = transaction.objectStore(store);

        var addPostRequest = records.add(record);

        addPostRequest.onsuccess = function(event) {
          var countRequest = records.count();

          countRequest.onsuccess = function (event) {
            var index = event.target.result;

            loadAndRenderPosts.loadAndRenderOnePost(dbName, store, index);
          }
        };

        addPostRequest.onerror = function() {
          errorHandler.showError(addPostRequest.error);
        };
      }
    }
  }
})();