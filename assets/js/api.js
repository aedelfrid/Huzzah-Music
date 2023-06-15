
// HuzzahMusic-GoodsCentral/0.1 + 'https://aedelfrid.github.io/GoodsCentral/'

var searchTrack = document.querySelector("#searchTrack").value;
var searchArtist = document.querySelector("#searchArtist").value;
var searchAlbum = document.querySelector("#searchAlbum").value;
var searchGenre = document.querySelector("#searchGenre").value;


var trackSearch = 'https://api.spotify.com/v1/search?q=' + searchTrack + 'type=track';
var artistSearch = 'https://api.spotify.com/v1/search?q=' + searchArtist + 'type=artist';
var albumSearch = 'https://api.spotify.com/v1/search?q=' + searchAlbum + 'type=album';
var genreSearch = 'https://api.spotify.com/v1/search?q=' + searchGenre + 'type=genre';

console.log(trackSearch)
console.log(artistSearch);
console.log(albumSearch)
console.log(genreSearch)

function generalSearch() {

}


function advancedSearch() {

  // if text
    console.log(advancedSearch)

fetch(search)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        console.log(data);
      });
    
};

