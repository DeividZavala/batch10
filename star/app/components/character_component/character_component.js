(function () {
    'use strict'

    var character = {
        bindings:{
            category:"=",
            id:"="
        },
        controller:characterCtrl,
        templateUrl:"app/components/character_component/character.html",
    }

    function characterCtrl(starwarsApi) {
        var char = this;

        char.characters = starwarsApi.get({
            category:char.category,
            id:char.id
        })
        console.log(char.characters)
    }

    angular
        .module('starwars')
        .component('character',character);
})();