(function () {
    var youtubePlayer = {
        bindings:{
            id:"=",
        },
            controller:youtubeCtrl,
            templateUrl:"video.html"
        }

    youtubeCtrl.$insert = ['$sce']

    function youtubeCtrl($sce) {
        var youtube = this;
        youtube.base = 'https://www.youtube.com/embed/'
        youtube.video = $sce.trustAsResourceUrl(youtube.base+youtube.id);
    }

    angular
        .module('videos',[])
        .controller('youtubeCtrl',youtubeCtrl)
        .component('youtubePlayer',youtubePlayer);
        
})();