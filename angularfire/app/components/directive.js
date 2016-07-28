(function () {

angular
    .module('pracfirebase')
    .directive('directivaPrueba',directiveOne);

    function directiveOne(){
            directive = {
                templateUrl:"app/partials/directiva.html",
                controller:controllerDirective,
                controllerAs:"one"
            }
            return directive;
        }

        function controllerDirective(){
            var one = this;

            one.nombre = "javier"
            one.numero = 1
        }
})();