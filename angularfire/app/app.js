(function () {
    'use strict'

    angular
        .module('pracfirebase',["ngRoute","ngResource","firebase"])
        .controller('navCtrl',navCtrl);

        navCtrl.$inject = ['Auth','$location']

        function navCtrl(Auth,$location) {
            var nav = this;
            $(".dropdown-button").dropdown();

            nav.userLoggedIn = Auth.$getAuth();
            console.log('desde nav ',nav.userLoggedIn);

            nav.logout = function(){
                Auth.$unauth();
                $location.path('/login');
                location.reload();
            }
        }

})();