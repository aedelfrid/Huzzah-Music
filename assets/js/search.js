// var accessToken;
import {accessToken} from './auth.js';
var access_Token = await accessToken;
//search functionality draft
// var searchBtn = document.querySelector(".searchBtn");

// searchBtn.addEventListener("click", function() {
//     var searchInput = document.querySelector("#formSearch");
//     var searchTerms = searchInput.value;
// if (searchTerms === '') {

// } else {
//     searchGet(accessToken);
//     var searchTerms = searchInput.value;
    
//     async function searchGet(data = {}) {

//         var result = await fetch(`https://api.spotify.com/v1/search?q=${searchTerms}&type=track,artist,album`,{
//             method:'GET',
//             headers:{ 'Authorization' : `Bearer ${accessToken}`
//             }});

//         var data = await result.json()
//         console.log(data);
        
// }}
// });
//on focus, clear text fields for next search

var cardInsertArea = document.querySelector("#cardInfoInsert");
var cardInfo = document.querySelector(".card-info");

// advanced search input fields and activation button
var searchTrack = document.querySelector("#searchTrack");
var searchArtist = document.querySelector("#searchArtist");
var searchAlbum = document.querySelector("#searchAlbum");

var searchTrackBtn = document.querySelector("#searchTrackBtn");
var searchArtistBtn = document.querySelector("#searchArtistBtn");
var searchAlbumBtn = document.querySelector("#searchAlbumBtn");

// //on click, clear text fields for next search
searchTrack.onclick = function() {
    searchTrack.value = '';
    
};

searchArtist.onclick = function() {
    searchArtist.value = '';
};

searchAlbum.onclick = function() {
    searchAlbum.value = '';
};

//when search button is clicked, input text is searched according to type (track, artist, album)
searchTrackBtn.addEventListener("click", function() {

    while (cardInsertArea.firstChild) {
        cardInsertArea.removeChild(cardInsertArea.firstChild);
    }

    var trackName = searchTrack.value;

    if (trackName === '') {

    } else {
        trackGet(access_Token);
        var trackName = searchTrack.value;

        async function trackGet(data = {}) {

        var result = await fetch(`https://api.spotify.com/v1/search?q=${trackName}&type=track`,{
            method:'GET',
            headers:{ 'Authorization' : `Bearer ${access_Token}`
            }});

        var data = await result.json()
        console.log(data);

            for (var i = 0; i < data.tracks.items.length; i++) {
           var trackItems = { 
            trackAlbumName: data.tracks.items[i].album.name,//name of album
            trackImg: data.tracks.items[i].album.images[0].url, //album image
            trackArtist: data.tracks.items[i].artists[0].name, // track artist name
            tracksName: data.tracks.items[i].name, //track name
            spotifyTrackLink: data.tracks.items[i].external_urls.spotify, //link to spotify
           };       
            //link to spotify
            console.log(trackItems.spotifyTrackLink);
            //name of album
            console.log(trackItems.trackAlbumName);
            //album image
            console.log(trackItems.trackImg);
            //track Artist
            console.log(trackItems.trackArtist);
            //track name
            console.log(trackItems.tracksName);
            
            var trackCardInfo = 
            `<div class="card-info card ml-5 m-4" style="max-width: 500px; max-height: 300px; background-color: black; color:  rgb(165, 154, 235);">
                <button class="saveBtn btn"><i class="fa fa-heart fa"></i></button>
                <div class="row g-0">
                    <div class="col-md-4">
                    <img id="trackImage" src=${trackItems.trackImg} class="img-fluid rounded-start" alt="album image provided for track">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <div class="row">
                                <div class="col">
                                     <h5 id="tracksName" class="card-title">${trackItems.tracksName}</h5>
                                </div>
                             </div>
                            <p class="card-text">from ${trackItems.trackAlbumName} by ${trackItems.trackArtist}</p>
                            <button class="linkBtn btn-danger"><a href="${trackItems.spotifyTrackLink}">Check out on Spotify</a></button>
                        </div>
                    </div>
                </div>
            </div>`
            
            cardInsertArea.insertAdjacentHTML('beforeend', trackCardInfo); 
            }}};

        var saveBtn = document.querySelector(".saveBtn");

         saveBtn.addEventListener("click", function(event) {
            // event.target.parent.localStorage.setItem("trackCard",JSON.stringify(trackItems));
           event.target.parentElement.localStorage.setItem("trackCard", JSON.stringify(trackItems));
        //  this.event.localStorage.setItem("trackCard",JSON.stringify(trackItems));    
        });
    });

 searchArtistBtn.addEventListener("click", function(){

    while (cardInsertArea.firstChild) {
        cardInsertArea.removeChild(cardInsertArea.firstChild);
    }

    var artistName = searchArtist.value;

    if (artistName === '') {

    } else {

        artistGet(access_Token);
        var artistName = searchArtist.value;
        async function artistGet(data = {}) {
            var result = await fetch(`https://api.spotify.com/v1/search?q=${artistName}&type=artist`,{
                method:'GET',
                headers:{ 'Authorization' : `Bearer ${access_Token}`
                }});
    
        var data = await result.json()
        console.log(data)

        for (var i = 0; i < data.artists.items.length; i++ ) {
                var artistsName = data.artists.items[i].name;
                var spotifyArtistLink = data.artists.items[i].external_urls.spotify;
                var artistImg = data.artists.items[i].images[0].url;
                var artistGenres = data.artists.items[i].genres;
                
                //link to spotify
                console.log(artistsName);
               // name of album
                console.log(spotifyArtistLink);
                //album image
                console.log(artistImg);
                //track Artist
                console.log(artistGenres);
               
                
                var artistCardInfo = 
                `<div class="card ml-5 m-4" style="max-width: 500px; max-height: 300px">
                <div class="row g-0">
                <div class="col-md-4">
                    <img id="trackImage" src=${artistImg} class="img-fluid rounded-start" style="max-height: 200px" alt="album image provided for artist">
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
                        <button class="saveBtn btn mr-4 me-5"><i class="fa fa-star fa" ></i></button>
                    </div>
                    </div>
                    <p class="card-text">"Associated genres: ${artistGenres}</p>
                    <button class="linkBtn btn-danger"><a href="${spotifyArtistLink}">Check out on Spotify</a></button>
                    </div>
                </div>
                </div>
            </div>`
                
            cardInsertArea.insertAdjacentHTML('beforeend', artistCardInfo);        
        }}};
        return artistCardInfo;
});

searchAlbumBtn.addEventListener("click", function() {

    while (cardInsertArea.firstChild) {
        cardInsertArea.removeChild(cardInsertArea.firstChild);
    }

    var albumName = searchAlbum.value;
    
    if (albumName === '') {

    } else {

        albumGet(access_Token);
        var albumName = searchAlbum.value;

        async function albumGet(data = {}) {
            var result = await fetch(`https://api.spotify.com/v1/search?q=${albumName}&type=album`,{
                method:'GET',
                headers:{ 'Authorization' : `Bearer ${access_Token}`
                }});
            
                var data = await result.json()
                console.log(data)

                for (var i = 0; i < data.albums.items.length; i++) {
            
                    var spotifyAlbumLink = data.albums.items[i].external_urls.spotify; //link to spotify
                    var albumsName = data.albums.items[i].name; ;//name of album
                    var albumImg = data.albums.items[i].images[0].url; //album image
                    var albumArtist = data.albums.items[i].artists[0].name; // track artist name
                        
                    //link to spotify
                    console.log(spotifyAlbumLink);
                    //name of album
                    console.log(albumsName);
                    //album image
                    console.log(albumImg);
                    //album Artist
                    console.log(albumArtist);
                   
                    
                    var albumCardInfo = 
                    `<div class="card ml-5 m-4" style="max-width: 500px; max-height: 300px">
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
                            <button class="saveBtn btn mr-4 me-5"><i class="fa fa-star fa" ></i></button>
                        </div>
                        </div>
                        <p class="card-text">by ${albumArtist}</p>
                        <button class="linkBtn btn-danger"><a href="${spotifyAlbumLink}">Check out on Spotify</a></button>
                        </div>
                    </div>
                    </div>
                </div>`
                    
                cardInsertArea.insertAdjacentHTML('beforeend', albumCardInfo);
            }}};
            return albumCardInfo;
 });
