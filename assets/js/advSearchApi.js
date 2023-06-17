var accessToken;
import {spotifyClientID} from './key.js'
import {spotifySecret} from './key.js'


var searchResults;

var pageNum = 0;
var searchQuery = document.querySelector("#formSearch")
//var types = 'track' + '%2c' + 'artist' ;
var resultLimit = '50';
var offset = resultLimit*pageNum;


async function authorization(data = {}) {
    const result = await fetch('https://accounts.spotify.com/api/token',{
        method:'POST',
        headers:{ 
            'Content-Type' : 'application/x-www-form-urlencoded',
            'Authorization' : 'Basic ' + btoa(spotifyClientID + ':' + spotifySecret),
    },
    body: 'grant_type=client_credentials'
});
    
    var data = await result.json();
    accessToken = data.access_token;

}; //end of authorization function - should now have access to token


// advanced search input fields and activation button
var searchTrack = document.querySelector("#searchTrack");
var searchArtist = document.querySelector("#searchArtist");
var searchAlbum = document.querySelector("#searchAlbum");

var advSearchBtn = document.querySelector(".advSearchBtn");


advSearchBtn.addEventListener("click", function() {
    var trackName = searchTrack.value;
    var artistName = searchArtist.value;
    var albumName = searchAlbum.value;

    if (trackName === '') {

    } else {

        trackGet(accessToken);
        var trackName = searchTrack.value;

        async function trackGet(data = {}) {

        var result = await fetch(`https://api.spotify.com/v1/search?q=${trackName}&type=track`,{
            method:'GET',
            headers:{ 'Authorization' : `Bearer ${accessToken}`
            }});

        var data = await result.json()
        console.log(data);

            for (var i = 0; i < data.tracks.items.length; i++) {
            
            var spotifyTrackLink = data.tracks.items[i].external_urls.spotify; //link to spotify
            var trackAlbumName = data.tracks.items[i].album.name; ;//name of album
            var trackImg = data.tracks.items[i].album.images[0].url; //album image
            var trackArtist = data.tracks.items[i].artists[0].name; // track artist name
            var tracksName = data.tracks.items[i].name; //track name
                
            var cardInfoInsert = document.querySelector("#cardInfoInsert");
                
            //link to spotify
            console.log(spotifyTrackLink);
           // name of album
            console.log(trackAlbumName);
            //album image
            console.log(trackImg);
            //track Artist
            console.log(trackArtist);
            //track name
            console.log(tracksName);
            
            var trackCardInfo = 
            `<div class="card ml-5 m-4" style="max-width: 900px;">
            <div class="row g-0">
            <div class="col-md-4">
                <img id="trackImage" src=${trackImg} class="img-fluid rounded-start" alt="album image provided for track">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                <div class="row">
                <div class="col">
                    <h5 id="tracksName" class="card-title">${tracksName}</h5>
                </div>
                    <div class="col">
                </div>
                <div class="col">
                    <button class="saveBtn btn me-5"><i class="fa fa-star fa" ></i></button>
                </div>
                </div>
                <p class="card-text">from ${trackAlbumName} by ${trackArtist}</p>
                <button class="linkBtn btn-danger"><a href="${spotifyTrackLink}">Read More</a></button>
                </div>
            </div>
            </div>
        </div>`
            
            cardInfoInsert.innerHTML = trackCardInfo;

            }}};

    if (artistName === '') {

    } else {

        artistGet(accessToken);
        var artistName = searchArtist.value;
        async function artistGet(data = {}) {
            var result = await fetch(`https://api.spotify.com/v1/search?q=${artistName}&type=artist`,{
                method:'GET',
                headers:{ 'Authorization' : `Bearer ${accessToken}`
                }});
    
        var data = await result.json()
        console.log(data)

        for (var i = 0; i < data.artists.items.length; i++ ) {
                var artistsName = data.artists.items[i].name;
                var spotifyArtistLink = data.artists.items[i].external_urls.spotify;
                var artistImg = data.artists.items[i].images[0].url;
                var artistGenres = data.artists.items[i].genres;

                var cardInfoInsert = document.querySelector("#cardInfoInsert");
                
                //link to spotify
                console.log(artistsName);
               // name of album
                console.log(spotifyArtistLink);
                //album image
                console.log(artistImg);
                //track Artist
                console.log(artistGenres);
               
                
                var artistCardInfo = 
                `<div class="card ml-5 m-4" style="max-width: 900px;">
                <div class="row g-0">
                <div class="col-md-4">
                    <img id="trackImage" src=${artistImg} class="img-fluid rounded-start" alt="album image provided for artist">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                    <div class="row">
                    <div class="col">
                        <h5 id="artistsName" class="card-title">${artistsName}</h5>
                    </div>
                        <div class="col">
                    </div>
                    <div class="col">
                        <button class="saveBtn btn me-5"><i class="fa fa-star fa" ></i></button>
                    </div>
                    </div>
                    <p class="card-text">"Associated genres: ${artistGenres}</p>
                    <button class="linkBtn btn-danger"><a href="${spotifyArtistLink}">Read More</a></button>
                    </div>
                </div>
                </div>
            </div>`
                
                cardInfoInsert.innerHTML = artistCardInfo;       
}}};

    if (albumName === '') {

    } else {

        albumGet(accessToken);
        var albumName = searchAlbum.value;

        async function albumGet(data = {}) {
            var result = await fetch(`https://api.spotify.com/v1/search?q=${albumName}&type=album`,{
                method:'GET',
                headers:{ 'Authorization' : `Bearer ${accessToken}`
                }});
            
                var data = await result.json()
                console.log(data)

                for (var i = 0; i < data.albums.items.length; i++) {
            
                    var spotifyAlbumLink = data.albums.items[i].external_urls.spotify; //link to spotify
                    var albumsName = data.albums.items[i].name; ;//name of album
                    var albumImg = data.albums.items[i].images[0].url; //album image
                    var albumArtist = data.albums.items[i].artists[0].name; // track artist name
                   
                        
                    var cardInfoInsert = document.querySelector("#cardInfoInsert");
                        
                    //link to spotify
                    console.log(spotifyAlbumLink);
                    //name of album
                    console.log(albumsName);
                    //album image
                    console.log(albumImg);
                    //album Artist
                    console.log(albumArtist);
                   
                    
                    var albumCardInfo = 
                    `<div class="card ml-5 m-4" style="max-width: 900px;">
                    <div class="row g-0">
                    <div class="col-md-4">
                        <img id="trackImage" src=${albumImg} class="img-fluid rounded-start" alt="album image provided for track">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                        <div class="row">
                        <div class="col">
                            <h5 id="tracksName" class="card-title">${albumsName}</h5>
                        </div>
                            <div class="col">
                        </div>
                        <div class="col">
                            <button class="saveBtn btn me-5"><i class="fa fa-star fa" ></i></button>
                        </div>
                        </div>
                        <p class="card-text">by ${albumArtist}</p>
                        <button class="linkBtn btn-danger"><a href="${spotifyAlbumLink}">Read More</a></button>
                        </div>
                    </div>
                    </div>
                </div>`
                    
                    cardInfoInsert.innerHTML = albumCardInfo;
        
            };

     }};

});


(function callEveryHour() {
    setInterval(authorization(), 1000 * 60 * 60);
}());
