(function () {
    'use strict'

    var register = {
        templateUrl:"app/components/register_component/register.html",
        controller:registerCtrl,
    }

    function registerCtrl(Auth,$location) {
        var reg = this;

        reg.register = function () {
            Auth.$createUser({
                email:reg.email,
                password:reg.password
            }).then(function(userData){
                console.log('user created with uid' ,userData)
                $location.path('/')
            }).catch(function(error){
                console.log(error)
            })
        }
    }

    angular
        .module('login')
        .component('register',register);
})();