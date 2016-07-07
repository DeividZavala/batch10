(function () {
    'use strict'

    var starwars = {
        bindings:{
            category: "=",
            id: '='  
        },
        controller:characterCtrl,
        template:`
            <ul>
                <li>{{$ctrl.character.name}}</li>
                <li>{{$ctrl.character.mass}} Kg</li>
                <li>{{$ctrl.character.height}} cm</li>
            </ul>

        `
    }

    angular
        .module('starwars')
        .component('starWars',starwars);

    function characterCtrl(starwarsApi) {
        var star = this;

        star.character = starwarsApi.get({
            category:star.category,
            id:star.id
        })
        console.log(star.character)

    }

})();