(function () {
    'use strict'

    var list = {
        templateUrl:"app/components/list_component/list.html",
        controller:listCtrl
    }

    function listCtrl($firebaseArray) {
        var list = this;

        var ref = new Firebase('https://practicabatch10.firebaseio.com/data');

        list.data = $firebaseArray(ref)


        $('.collapsible').collapsible({
            accordion : false
         });
    }

    angular
        .module('login')
        .component('list',list);
})();