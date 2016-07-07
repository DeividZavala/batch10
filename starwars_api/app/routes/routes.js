(function () {
    'use strict'

    angular
        .module('starwars')
        .config(config);

    function config($routeProvider) {
        $routeProvider
            .when('/',{
                template:`<star-wars category="'people'" id="1"></star-wars>`
            })
            .when('/planets',{
                template:`<planets category="'planets'" id="1"></planets>`
            })
            .otherwise({
                redirectTo:'/'
            })
    }
})();