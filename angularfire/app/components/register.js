(function () {
    'use strict'

    var registro = {
        controller:regController,
        templateUrl:"app/partials/register.html"
    }

    regController.$inject = ['Auth','$location'];

    function regController(Auth,$location) {
        var reg = this;

        reg.register = function () {
            Auth.$createUser({
                email:reg.email,
                password:reg.password
            }).then(function(userData){
                console.log('User created with uid', userData)
                $location.path('/');
            }).catch(function(){
                console.log(error)
            })
        }

    }

    angular
        .module('pracfirebase')
        .component('registro',registro);

})();