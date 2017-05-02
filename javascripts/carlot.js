console.log("asshole loaded");


var CarLot = (function () {
    var inventory = [];

    return {
        loadInventory: function (callback) {
            var inventoryLoader = new XMLHttpRequest();

            inventoryLoader.addEventListener("load", function (event) {
                inventory = JSON.parse(event.target.responseText).cars;
                callback();

            });

            inventoryLoader.addEventListener("error", function (event){
               console.log("error Loading");
            });

            inventoryLoader.open("GET", "inventory.json");
            inventoryLoader.send();
        },

        getInventoryArray: function() {
            return inventory;
        }
  }

})();
