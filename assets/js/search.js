
import { accessToken } from "./auth.js";

var token = await accessToken;

var pageNum = 0;
var searchQuery = document.querySelector("#formSearch")
//var types = 'track' + '%2c' + 'artist' ;
var resultLimit = '50';
var offset = resultLimit*pageNum;



//search functionality draft
// var searchBtn = document.querySelector(".searchBtn");

// searchBtn.addEventListener("click", function() {
//     var searchInput = document.querySelector("#formSearch");
//     var searchTerms = searchInput.value;
// if (searchTerms === '') {

// } else {
//     searchGet(token);
//     var searchTerms = searchInput.value;
    
//     async function searchGet(data = {}) {

//         var result = await fetch(`https://api.spotify.com/v1/search?q=${searchTerms}&type=track,artist,album`,{
//             method:'GET',
//             headers:{ 'Authorization' : `Bearer ${token}`
//             }});

//         var data = await result.json()
//         console.log(data);
        
// }}
// });

// advanced search input fields and activation button

var queryForm = document.querySelector("#queries");

var searchTrack = document.querySelector("#searchTrack");
var searchArtist = document.querySelector("#searchArtist");
var searchAlbum = document.querySelector("#searchAlbum");

var advSearchBtn = document.querySelector(".advSearchBtn");

//when search button is clicked, input text is searched according to type (track, artist, album)
advSearchBtn.addEventListener("click", function() {
    var trackName = searchTrack.value;
    var artistName = searchArtist.value;
    var albumName = searchAlbum.value;

    if (trackName === '') {

    } else {

        trackGet(token);
        var trackName = searchTrack.value;

        async function trackGet(data = {}) {

        var result = await fetch(`https://api.spotify.com/v1/search?q=${trackName}&type=track`,{
            method:'GET',
            headers:{ 'Authorization' : `Bearer ${token}`
            }});

        var data = await result.json()
        console.log(data);

            for (var i = 0; i < data.tracks.items.length; i++) {
            
            var spotifyTrackLink = data.tracks.items[i].external_urls.spotify; //link to spotify
            var trackAlbumName = data.tracks.items[i].album.name; ;//name of album
            var trackImg = data.tracks.items[i].album.images[0].url; //album image
            var trackArtist = data.tracks.items[i].artists[0].name; // track artist name
            var tracksName = data.tracks.items[i].name; //track name
                
                
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
            
            document.querySelector("#cardInfoInsert").insertAdjacentHTML('beforeend', trackCardInfo); 
          
            }}};

    if (artistName === '') {

    } else {

        artistGet(token);
        var artistName = searchArtist.value;
        async function artistGet(data = {}) {
            var result = await fetch(`https://api.spotify.com/v1/search?q=${artistName}&type=artist`,{
                method:'GET',
                headers:{ 'Authorization' : `Bearer ${token}`
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
                
            document.querySelector("#cardInfoInsert").insertAdjacentHTML('beforeend', artistCardInfo);
                   
}}};

    if (albumName === '') {

    } else {

        albumGet(token);
        var albumName = searchAlbum.value;

        async function albumGet(data = {}) {
            var result = await fetch(`https://api.spotify.com/v1/search?q=${albumName}&type=album`,{
                method:'GET',
                headers:{ 'Authorization' : `Bearer ${token}`
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
                    
                document.querySelector("#cardInfoInsert").insertAdjacentHTML('beforeend', albumCardInfo);
                
            
            };

     }};

//      var saveBtn = document.querySelector(".saveBtn");

//      saveBtn.addEventListener("click", function(event) {
//          event.preventDefault();
         
//        localStorage.setItem("trackCard", JSON.stringify(this.trackCardInfo));
//        localStorage.setItem("artistCard", JSON.stringify(this.rtistCardInfo));
//        localStorage.setItem("albumCard", JSON.stringify(this.albumCardInfo));
//      });
 });

=======

// private methods
const _search = async (input) => {
let token= await _getToken()
console.log(token)
    const result = await fetch(`https://api.spotify.com/v1/search?q=${input}&type=album%2Cplaylist%2Cartist%2Ctrack`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token}
    });

    const data = await result.json();
    console.log("search results",data)
    return data;
    
}
document.addEventListener("DOMContentLoaded", function () {
   
    var searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.className = "form-control";
    searchInput.id = "searchInput";
    
  
    var label = document.createElement("label");
    label.textContent = "Basic Search:";
    label.htmlFor = "searchInput";
  
    var searchButton = document.createElement("button");
    searchButton.textContent = "Search";
    searchButton.className = "btn btn-primary";
    searchButton.id = "searchButton";
    var header = document.querySelector("header");
  
    var container = document.createElement("div");
    container.className = "container";
  
    var h1 = document.createElement("h4");
    // h1.textContent = "Spotify ";
    container.appendChild(h1);
   
  

    var formGroup = document.createElement("div");
    formGroup.className = "form-group";
    formGroup.appendChild(label);
    formGroup.appendChild(searchInput);
    container.appendChild(formGroup);
    container.appendChild(searchButton);
    header.appendChild(container);
    //header.insertBefore(container, header.firstChild);// before header
  
    var resultsDiv = document.createElement("div");
    resultsDiv.id = "results";
    resultsDiv.className = "card-deck d-flex flex-wrap" ;
    container.appendChild(resultsDiv);
  
   // document.body.appendChild(container);
  
    searchButton.addEventListener("click", async function () {
        
      const data= await _search(searchInput.value);
      console.log("results",data)
      displayResults(data)


    });
  
   
  
    function displayResults(data) {
      resultsDiv.innerHTML = "";
  
      var items = [];
      items.push(...data['artists'].items);
      items.push(...data['tracks'].items);
      items.push(...data['albums'].items);
      items.push(...data['playlists'].items);
  
      items.forEach(function (item) {
       
       
   
        var cardFirstDiv = document.createElement("div");
        cardFirstDiv.className = "row g-0";
        var cardSecondDivForImage = document.createElement("div");
        cardSecondDivForImage.className = "col-md-4";
        cardFirstDiv.appendChild(cardSecondDivForImage)
        
                                   
  
        var image = document.createElement("img");
        // image.src = item.images[0]?.url || "placeholder.jpg";
        // image.src = item.images ? item.images[0].url : item.album.images[0].url || "placeholder.jpg";
        if (item.images && item.images.length > 0) {
          image.src = item.images[0].url;
        } else if (item.album && item.album.images && item.album.images.length > 0) {
          image.src = item.album.images[0].url;
        } else {
          image.src = "placeholder.jpg";
        }
        image.className = "img-fluid rounded-start";
        cardSecondDivForImage.appendChild(image);
        
        
        var cardSecondDivForTitle = document.createElement("div");
        cardSecondDivForTitle.className = "col-md-8";
        cardFirstDiv.appendChild(cardSecondDivForTitle)
        
  
        var cardBody = document.createElement("div");
        cardBody.className = "card-body";
        cardSecondDivForTitle.appendChild(cardBody)

        var cardBodyRow = document.createElement("div");
        cardBodyRow.className = "row";
        cardBody.appendChild(cardBodyRow)

        var cardBodyCol = document.createElement("div");
        cardBodyCol.className = "col";
        cardBody.appendChild(cardBodyCol)
      
  
        var title = document.createElement("h5");
        title.className = "card-title";
        title.textContent = item.name;
        cardBodyCol.appendChild(title);
        
        var button = document.createElement("button");
        button.textContent = "Click me";
        button.className = "btn btn-primary";
        cardBodyCol.appendChild(button);
        button.addEventListener("click", function() {
          window.open(spotifyTrackLink, "_blank");
        });
        if (item.artists) {
          var artist = document.createElement("p");
          artist.className = "card-text";
          artist.textContent = item.type === 'artist' ? item.name : item.artists[0].name;
          cardBodyCol.appendChild(artist);
        }

        //   var artist = document.createElement("p");
        //   artist.className = "card-text";
        //   artist.textContent = item.artists[0].name;
        //   cardBodyCol.appendChild(artist);
        // }
  
        resultsDiv.appendChild(cardFirstDiv);
      });
    }
  });
