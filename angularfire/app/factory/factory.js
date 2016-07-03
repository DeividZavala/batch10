(function () {
    'use strict'

    angular
        .module('pracfirebase')
        .factory('Auth',authService);

    authService.$inject = ['$firebaseAuth']
    function authService($firebaseAuth) {
        var link = new Firebase('https://practicabatch10.firebaseio.com/');
        return $firebaseAuth(link);
    }

})();