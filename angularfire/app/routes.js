(function () {
    'use strict'

    angular
        .module('pracfirebase')
        .config(config);

        function config($routeProvider) {
            $routeProvider
                .when('/',{
                    template:'<lista></lista>'
                })
                .when('/agregar',{
                    template:'<agregar></agregar>'
                })
                .otherwise('/')
        }

})();