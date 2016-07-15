(function () {
    'use strict'

    var log = {
        templateUrl:"app/components/login_component/login.html",
        controller:loginCtrl,
    }

    function  loginCtrl(Auth,$location) {
        var log = this;

        log.login = function () {
            Auth.$authWithPassword({
                email:log.email,
                password:log.password
            }).then(function(userData){
                console.log('userlogged in with uid',userData)
                $location.path('/data')
                location.reload();
            }).catch(function(error){
                console.log(error)
            })
        }

    }

    angular
        .module('login')
        .component('log',log)
})();