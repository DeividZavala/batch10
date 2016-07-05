(function () {
    'use strict'

    angular
        .module('starwars')
        .factory('starwarsApi',starwarsApi);

    function starwarsApi($resource) {
        return $resource("http://swapi.co/api/:category/:id")
    }
})();