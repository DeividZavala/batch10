(function () {
    'use strict'

    var registro = {
        controller:regController,
        templateUrl:"app/partials/register.html"
    }

    function regController() {
        var reg = this;
    }

    angular
        .module('pracfirebase')
        .component('registro',registro);
})();