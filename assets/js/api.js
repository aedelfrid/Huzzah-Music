
// HuzzahMusic-GoodsCentral/0.1 + 'https://aedelfrid.github.io/GoodsCentral/'




function sendSearch () {
  var generalSearch = document.querySelector("#formSearch").value;

  console.log(generalSearch);
  
  if (generalSearch > 0) {

  }
}


function advancedSearch() {

var searchTrack = document.querySelector("#searchTrack").value;
var searchArtist = document.querySelector("#searchArtist").value;
var searchAlbum = document.querySelector("#searchAlbum").value;
var searchGenre = document.querySelector("#searchGenre").value;

console.log(searchAlbum)
console.log(searchArtist)
console.log(searchGenre)
console.log(searchTrack)

if (searchTrack > 0) {
  var trackSearch = 'https://api.spotify.com/v1/search?q=' + searchTrack + 'type=track';
  console.log(trackSearch)
} else if (searchArtist > 0) {
  var artistSearch = 'https://api.spotify.com/v1/search?q=' + searchArtist + 'type=artist';
  console.log(artistSearch);
} else if (searchAlbum > 0) {
  var albumSearch = 'https://api.spotify.com/v1/search?q=' + searchAlbum + 'type=album';
  console.log(albumSearch)
} else if (searchGenre > 0) {
  var genreSearch = 'https://api.spotify.com/v1/search?q=' + searchGenre + 'type=genre';
  console.log(genreSearch);
}
};

// fetch(advancedSearch)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//       });
    


