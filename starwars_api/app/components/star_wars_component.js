(function () {
    'use strict'

    var starwars = {
        bindings:{
            category: "=",
            id: '='  
        },
        controller:characterCtrl,
        template:`
            <ul style="list-style:none">
                <li>{{$ctrl.character.name}}</li>
                <li ng-if="$ctrl.category = planets" >{{$ctrl.character.mass}} kg</li>
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