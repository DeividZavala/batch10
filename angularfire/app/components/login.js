(function () {
    'use strict'

    var login = {
        controller:loginController,
        templateUrl:"app/partials/login.html",
    }

    function loginController() {
        var log = this;
    }

    angular
        .module('pracfirebase')
        .component('login',login);
})();