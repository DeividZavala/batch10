(function () {
    'use strict'

    angular
        .module('pracRoutes')
        .config(david)

        function david($routeProvider) {
            $routeProvider
                .when('/',{
                    template:'<card></card>'
                })
                .when('/texto',{
                    template:'<slider></slider>'
                })
                .otherwise({
                    redirectTo:'/'
                });
        }
})();