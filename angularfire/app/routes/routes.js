(function () {
    'use strict'

    angular
        .module('pracfirebase')
        .config(config);

        function config($routeProvider) {
            $routeProvider
                .when('/',{
                    template:'<login></login>',
                })
                .when('/agregar',{
                    template:'<agregar></agregar>'
                })
                .when('/data',{
                    template:'<lista></lista><directiva-prueba></directiva-prueba>'
                })
                .when('/registro',{
                    template:'<registro></registro>'
                })
                .otherwise('/')
        }

})();