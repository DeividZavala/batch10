(function () {
    'use strict'

    var hero = {
        controller:characterCtrl,
        templateUrl:"app/character_component/hero.html"
    }

    function characterCtrl(marvelData) {
        var char = this;

        char.characters = marvelData.get();
        console.log('personajes: ',marvelData)
    }

    angular
        .module('marvel')
        .component('hero',hero);
})();