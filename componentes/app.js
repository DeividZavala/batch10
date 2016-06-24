(function () {
    'use strict'


    var eseMero = {
        controller:praCtrl,
        templateUrl:'card.html',
    }

angular
    .module('practica2',[])
    .component('eseMero',eseMero);

    function praCtrl() {
        var prac = this;
        prac.name = 'david'
        prac.text = 'que onda morro'
    }


})();