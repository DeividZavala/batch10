(function () {
    'use strict'

    angular
        .module('marvel')
        .factory('marvelData',marvelData);

    marvelData.$inject = ['$resource']
    function marvelData($resource) {
        var apikey = '13f43ec564a049ade763bb906a1df510';
        var hash = '0aabb4fb9ce24fb92bacdc23ad121bab';
        return $resource('http://gateway.marvel.com/v1/public/characters?ts=1&apikey='+apikey+'&hash='+hash)
    }

})();