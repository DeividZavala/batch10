(function () {
    'use strict'

    var lista = {
        controller: listaController,
        templateUrl:"app/partials/lista.html"
    }

    listaController.$inject = ['$firebaseArray']

    function listaController($firebaseArray) {
        var lista = this;
        var ref = new Firebase('https://practicabatch10.firebaseio.com/data');

        lista.data = $firebaseArray(ref);
        console.log(lista.data);

        $('.collapsible').collapsible({
            accordion : false
         });

    }



    angular
        .module('pracfirebase')
        .component('listaResultado',lista)
        
})();

