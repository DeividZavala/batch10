(function () {
    'use strict'

    var hero = {
        controller:characterCtrl,
        templateUrl:"app/character_component/hero.html"
    }

    function characterCtrl(marvelData) {
        var char = this;

        char.characters = marvelData.get().$promise.then(function(response){
            return response.data.results[0]
        });
        console.log(char.characters)
    }

    angular
        .module('marvel')
        .component('hero',hero);
})();