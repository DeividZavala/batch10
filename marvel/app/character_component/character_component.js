(function () {
    'use strict';

    var hero = {
        templateUrl:"app/character_component/hero.html",
        controller:characterCtrl
    }

    characterCtrl.$inject = ['marvelData'];
    function characterCtrl(marvelData) {
        var char = this;
        char.superheroe = null;
        
        char.characters = marvelData.get()
            .$promise.then(function(response){
                char.superheroe = response.data.results;
                console.log(char.superheroe);
        });
    }

    angular
        .module('marvel')
        .component('hero', hero);
})();