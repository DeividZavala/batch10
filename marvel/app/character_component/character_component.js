(function () {
    'use strict'

    var hero = {
        templateUrl:"app/character_component/hero.html",
        controller:characterCtrl,
    }

    function characterCtrl(marvelData) {
        var char = this;

        char.superheros = null;

        marvelData.get()
        .$promise
            .then(function(response){
                char.superheros = response.data.results;
                console.log(char.superhero)
            })
    }

    angular
        .module('marvel')
        .component('hero',hero);
})();