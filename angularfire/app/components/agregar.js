(function () {
    'use strict'

    var agregar = {
        controller:addData,
        templateUrl:"app/partials/form.html"
    }

    addData.$inject = ['$firebaseArray']
    function addData($firebaseArray) {
        var agregar = this;

        var ref = new Firebase('https://practicabatch10.firebaseio.com/data');

        agregar.data = $firebaseArray(ref);

        agregar.add = add;

        function add() {
            agregar.data.$add({
                'Nombre':agregar.name,
                'Correo':agregar.email,
                'Message':agregar.text
            });

            agregar.name = '';
            agregar.email = '';
            agregar.text = '';
        }
    }

    angular
        .module('pracfirebase')
        .component('agregar',agregar);
        
})();