(function () {
    'use strict'

    var nav = {
        controller:navCtrl,
        templateUrl:"app/partials/nav.html"
    }

    navCtrl.$inject = ['Auth','$location']

    function navCtrl(Auth,$location) {
        var nav = this;

        nav.userLoggedIn = Auth.$getAuth();
        console.log('desde nav ',nav.userLoggedIn);

        nav.logout = function(){
            Auth.$unauth();
            $location.path('/login');
            location.reload();
        }

    }

    angular
        .module('pracfirebase')
        .component('navBar',nav)
})();