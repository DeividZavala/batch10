(function () {
    'use strict'

    var nav = {
        templateUrl:"app/components/nav_component/nav.html",
        controller:navCtrl
    }

    function navCtrl(Auth,$location) {
        var nav  = this;

        nav.userLoggedIn = Auth.$getAuth();
        console.log('desde nav ',nav.userLoggedIn);

        nav.logout = function(){
            Auth.$unauth();
            $location.path('/');
            location.reload();
        }

    }

    angular
        .module('login')
        .component('navBar',nav);
})();