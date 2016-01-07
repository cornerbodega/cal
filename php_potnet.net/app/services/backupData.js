
angular
.module('myApp')
.factory('Data', [
    Data
]);

function Data() {

    var _plant_rooms = {};
    function setPlantRooms(plant_rooms) {
        _plant_rooms = plant_rooms
    }
    function getPlantRooms() {
        return _plant_rooms
    }

    var _inventory = {};
    function setInventory(inventory) {
        console.log('set inventory');
        _inventory = inventory;
    }
    function getInventory() {
        console.log('get inventory');
        return _inventory;
    }

    return {
        setManifests: setManifests,
        getManifests: getManifests,

        setPlantRooms: setPlantRooms,
        getPlantRooms: getPlantRooms,

        getInventory: getInventory,
        setInventory: setInventory,


    }
}
