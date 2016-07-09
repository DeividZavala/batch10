(function () {
    'use strict'

    var spotifyplayer = {
        controller:spotifyCtrl,
        templateUrl:"app/spotify_component/spotify.html",
    }

    function spotifyCtrl(spotifySearch) {
        var spotify = this;

        spotify.audio = new Audio;
        spotify.play = play;
        spotify.song = null;
        spotify.playlist = null;
        spotify.search = doSearch;
        spotify.milliseconds = milliseconds;

        function milliseconds(ms){
            var min = Math.floor((ms/1000/60) << 0);;
            var sec = Math.floor((ms/1000) % 60);
            return min+":"+sec
        } 

        function play(song) {
            spotify.song = song;
            spotify.audio.pause();
            spotify.audio.src = song.preview_url;
            spotify.audio.play();
        }

        function doSearch() {
            console.log(spotify.song_name)
            spotifySearch.get({song:spotify.song_name})
            .$promise
                .then(function(response){
                    console.log(response)
                    spotify.playlist = response.tracks.items;
                    console.log(spotify.playlist)
                    spotify.play(response.tracks.items[0])
                });
        }

    }

    angular
        .module('spotify')
        .component('spotifyPlayer',spotifyplayer)
        
})();