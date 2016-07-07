(function () {
    'use strict'

    angular
        .module('starwars')
        .config(config);


    function peopleData(starwarsApi){
        return starwarsApi.query();
    }

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider
            .when('/',{
                template:`<character category="'people'" id="4"></character>`
            })
            .when('/planets',{
                template:`<planets category="'planets'" id="2"></planets>`
            })
            .otherwise({
                redirectTo:'/'
            })
    }

})();