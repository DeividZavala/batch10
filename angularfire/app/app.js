(function () {
    'use strict'

    angular
        .module('pracfirebase',["ngRoute","ngResource","firebase"])
        .controller('navCtrl',navCtrl);

        function navCtrl() {
            var nav = this;
        }

})();