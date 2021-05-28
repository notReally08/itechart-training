'use strict'

var getFromDB = (function () {
  return {
    getAll (dbName, store) {
      var openRequest = indexedDB.open(dbName, 1);
      var output = [];
      openRequest.onsuccess = function(event) {
        var db = event.target.result;
        var transaction = db.transaction(store);
        var records = transaction.objectStore(store);
        var getAllRecords = records.getAll()
        getAllRecords.onsuccess = function (event) {
          var items = event.target.result;
          output = output.concat(items);
          renderPosts.render(items);
        }
      }
    },
    getOne (dbName, store, index) {
      var openRequest = indexedDB.open(dbName, 1);
      openRequest.onsuccess = function(event) {
        var db = event.target.result;
        var transaction = db.transaction(store);
        var records = transaction.objectStore(store);
        var getRecord = records.get(index);
        getRecord.onsuccess = function (event) {
          var post = event.target.result;
          renderPosts.renderOne(post);
        }
      }
    }
  }
})();