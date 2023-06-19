
import { accessToken } from "./auth.js";

var token = await accessToken;

var pageNum = 0;
var searchQuery = document.querySelector("#formSearch");
var resultLimit = '50';
var offset = resultLimit * pageNum;

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
searchTrack.onclick = function () {
    searchTrack.value = '';

};

searchArtist.onclick = function () {
    searchArtist.value = '';
};

searchAlbum.onclick = function () {
    searchAlbum.value = '';
};

//when search button is clicked, input text is searched according to type (track, artist, album)
searchTrackBtn.addEventListener("click", function () {

    while (cardInsertArea.firstChild) {
        cardInsertArea.removeChild(cardInsertArea.firstChild);
    }

    var trackName = searchTrack.value;

    if (trackName === '') {

    } else {

        trackGet(token);

        var trackName = searchTrack.value;

        async function trackGet(data = {}) {

            var result = await fetch(`https://api.spotify.com/v1/search?q=${trackName}&type=track`, {
                method: 'GET',

                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            var data = await result.json();
            console.log(data);

            for (var i = 0; i < data.tracks.items.length; i++) {
                var trackItems = {
                    trackAlbumName: data.tracks.items[i].album.name,//name of album
                    trackImg: data.tracks.items[i].album.images[0].url, //album image
                    trackArtist: data.tracks.items[i].artists[0].name, // track artist name
                    tracksName: data.tracks.items[i].name, //track name
                    spotifyTrackLink: data.tracks.items[i].external_urls.spotify, //link to spotify
                };
                // //link to spotify
                // console.log(trackItems.spotifyTrackLink);
                // //name of album
                // console.log(trackItems.trackAlbumName);
                // //album image
                // console.log(trackItems.trackImg);
                // //track Artist
                // console.log(trackItems.trackArtist);
                // //track name
                // console.log(trackItems.tracksName);

                // var test = document.createElement('button');
                // test.setAttribute("class", "saveBtn");
                // test.textContent = trackItems.trackAlbumName;

                var trackCardInfo =
                    `<div class="card-info card ml-5 m-4">
                <button class="saveBtn btn"><i class="fa fa-heart fa"></i></button>
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src=${trackItems.trackImg} class="img trackImage" alt="album image provided for track">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <div class="row">
                                <div class="col">
                                     <h5 class="tracksName card-title">${trackItems.tracksName}</h5>
                                </div>
                             </div>
                            <p class="card-text">from ${trackItems.trackAlbumName} by ${trackItems.trackArtist}</p>
                            <div class="spotifyLink">
                                <button class="linkBtn btn"><a href="${trackItems.spotifyTrackLink}">Check out on Spotify
                                <img class="logo" src="assets/images/spotify-icons-logos/icons/01_RGB/02_PNG/Spotify_Icon_RGB_White.png" 
                                alt="SpotifyLogo"></a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`

                cardInsertArea.insertAdjacentHTML('beforeend', trackCardInfo);
                // cardInsertArea.append(test)

                var saveBtn = document.querySelector(".saveBtn");
                saveBtn.addEventListener("click", localStorage);

            };
            function localStorage(event) {
                console.log(event.target.parentElement) //logs the entire element, but does not save

                event.target.parentElement.localStorage.setItem("CardInfo", trackCardInfo)
            };
        }
    };

});

searchArtistBtn.addEventListener("click", function () {

    while (cardInsertArea.firstChild) {
        cardInsertArea.removeChild(cardInsertArea.firstChild);
    }

    var artistName = searchArtist.value;

    if (artistName === '') {

    } else {
        artistGet(token);

        var artistName = searchArtist.value;
        async function artistGet(data = {}) {
            var result = await fetch(`https://api.spotify.com/v1/search?q=${artistName}&type=artist`, {
                method: 'GET',

                headers: {
                    'Authorization': `Bearer ${token}`

                }
            });

            var data = await result.json()
            console.log(data)

            for (var i = 0; i < data.artists.items.length; i++) {
                var artistItems = {
                    artistsName: data.artists.items[i].name,
                    spotifyArtistLink: data.artists.items[i].external_urls.spotify,
                    artistImg: data.artists.items[i].images[0].url,
                    artistGenres: data.artists.items[i].genres
                };

                //link to spotify
                console.log(artistItems.artistsName);
                // name of album
                console.log(artistItems.spotifyArtistLink);
                //album image
                console.log(artistItems.artistImg);
                //track Artist
                console.log(artistItems.artistGenres);


                var artistCardInfo =
                    `<div class="card-info card ml-5 m-4">
                <button class="saveBtn btn"><i class="fa fa-heart fa"></i></button>
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src=${artistItems.artistImg} class="img artistImage" alt="image provided for artist">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <div class="row">
                                <div class="col">
                                     <h5 class="card-title artistName">${artistItems.artistsName}</h5>
                                </div>
                             </div>
                            <p class="card-text">Associated genres: ${artistItems.artistGenres}</p>
                            <div id="spotifyLink">
                                <button class="linkBtn btn"><a href="${artistItems.spotifyArtistLink}">Check out on Spotify
                                <img class="logo" src="assets/images/spotify-icons-logos/icons/01_RGB/02_PNG/Spotify_Icon_RGB_White.png" 
                                alt="SpotifyLogo"></a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`

                cardInsertArea.insertAdjacentHTML('beforeend', artistCardInfo);
            }
        }
    };
    return artistCardInfo;
});

searchAlbumBtn.addEventListener("click", function () {

    while (cardInsertArea.firstChild) {
        cardInsertArea.removeChild(cardInsertArea.firstChild);
    }

    var albumName = searchAlbum.value;

    if (albumName === '') {

    } else {

        albumGet(token);

        var albumName = searchAlbum.value;

        async function albumGet(data = {}) {
            var result = await fetch(`https://api.spotify.com/v1/search?q=${albumName}&type=album`, {
                method: 'GET',

                headers: {
                    'Authorization': `Bearer ${token}`

                }
            });

            var data = await result.json()
            console.log(data)

            for (var i = 0; i < data.albums.items.length; i++) {
                var albumItems = {
                    spotifyAlbumLink: data.albums.items[i].external_urls.spotify, //link to spotify
                    albumsName: data.albums.items[i].name,//name of album
                    albumImg: data.albums.items[i].images[0].url, //album image
                    albumArtist: data.albums.items[i].artists[0].name, // track artist name
                    albumRelease: data.albums.items[i].release_date,
                };

                // //link to spotify
                // console.log(albumItems.spotifyAlbumLink);
                // //name of album
                // console.log(albumItems.albumsName);
                // //album image
                // console.log(albumItems.albumImg);
                // //album Artist
                // console.log(albumItems.albumArtist);
                // //album release date
                // console.log(albumItems.albumRelease);


                var albumCardInfo =
                    `<div class="card-info card ml-5 m-4">
                <button class="saveBtn btn"><i class="fa fa-heart fa"></i></button>
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src=${albumItems.albumImg} class="img albumImage" alt="image provided for album">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <div class="row">
                                <div class="col">
                                     <h5 id="albumName" class="card-title">${albumItems.albumsName}</h5>
                                </div>
                             </div>
                            <p class="card-text">by ${albumItems.albumArtist}, released ${albumItems.albumRelease}</p>
                            <div class="spotifyLink">
                                <button class="linkBtn btn"><a href="${albumItems.spotifyAlbumLink}">Check out on Spotify
                                <img class="logo" src="assets/images/spotify-icons-logos/icons/01_RGB/02_PNG/Spotify_Icon_RGB_White.png" 
                                alt="SpotifyLogo"></a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`

                cardInsertArea.insertAdjacentHTML('beforeend', albumCardInfo);
            }
        }
    };
    return albumCardInfo;
});

//To save selected track, artist, or album cards to a wishlist through local storage.
// var saveBtn = document.querySelector(".saveBtn");

//      saveBtn.addEventListener("click", function(event) {
//          event.preventDefault();

//        event.parent.localStorage.setItem("trackCard", this.JSON.stringify(trackCardInfo));
//        event.parent.localStorage.setItem("artistCard", JSON.stringify(this.artistCardInfo));
//        event.parent.localStorage.setItem("albumCard", JSON.stringify(this.albumCardInfo));
//      });



// private methods
const _search = async (input) => {
    let token = await _getToken()
    console.log(token)
    const result = await fetch(`https://api.spotify.com/v1/search?q=${input}&type=album%2Cplaylist%2Cartist%2Ctrack`, {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + token }
    });

    const data = await result.json();
    console.log("search results", data)
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
    resultsDiv.className = "card-deck d-flex flex-wrap";
    container.appendChild(resultsDiv);

    // document.body.appendChild(container);

    searchButton.addEventListener("click", async function () {

        const data = await _search(searchInput.value);
        console.log("results", data)
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
            button.addEventListener("click", function () {
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

