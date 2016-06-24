(function () {
    'use strict'

    angular
        .module('practica1',[])
        .controller('pracCtrl',pracCtrl);

    function pracCtrl() {
        var first = this;
        first.name = 'David'
        first.age = 18
        first.number = 3
        first.string = 'hola morros'

        first.users = [
            {name:'raul',age:16,pais:'MX'},
            {name:'ulises',age:34,pais:'MX'},
            {name:'ruth',age:25,pais:'MX'},
            {name:'marco',age:45,pais:'USA'},
            {name:'rodrigo',age:25,pais:'USA'}
        ];

        first.ruco = addAge;
        first.click = click;

        function addAge(user) {
            user.age += 1
        }

        function click() {
            console.log(first.name)
        }
    }
})();