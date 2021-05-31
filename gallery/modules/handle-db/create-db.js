'use strict';

var createDB = (function() {
return {
    newDB(name, store, keyPath, enableAutoIncrement = true) {
      var openRequest = indexedDB.open(name, 1);

      openRequest.onupgradeneeded = function(event) {
        var db = event.target.result;

        if (!db.objectStoreNames.contains(store)) {
          db.createObjectStore(store, {keyPath: keyPath, autoIncrement: enableAutoIncrement}); // создаем хранилище
        }
      };
      
      openRequest.onsuccess = function () {
        loadAndRenderPosts.loadAndRenderAllPosts(name, store);
      }
    }
  }
})();

