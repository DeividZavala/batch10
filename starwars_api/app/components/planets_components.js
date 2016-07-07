(function () {
    'use strict'

    var planets = {
        bindings:{
            category: "=",
            id: '='  
        },
        controller:characterCtrl,
        template:`
        
        <ul>
            <li>Nombre del planeta: {{$ctrl.character.name}}</li>
            <li>Climate: {{$ctrl.character.climate}}</li>
            <li>Population: {{$ctrl.character.population}}</li>
            <li>Water: {{$ctrl.character.surface_water}}</li>
            <li>Terrain: {{$ctrl.character.terrain}}</li>
        </u>
        
        `
    }

    angular
        .module('starwars')
        .component('planets',planets)

    function characterCtrl(starwarsApi) {
        var star = this;

        star.character = starwarsApi.get({
            category:star.category,
            id:star.id
        })
        console.log(star.character)

    }
})();