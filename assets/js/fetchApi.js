//awicks44 / Javascript-SpotifyAPI - taken the function fetching authentification token through Client ID and Client Secret

// var tracksEndpoint =
// var trackEndpoint =
// var artistEndpoint = 
// var albumEndpoint = 
// var catergoryEndpoint =


async function fetchApi(function(data = {}) {

    var clientId = 'd01ca5196e4a44a7b2baa7c1da7d98c2';
    var clientSecret = 'e6b876c5e98c4f97b6ade347035aaddb';

    var _getToken = async () => {

        var result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded',
                'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        });

        var data = await result.json();
        return data.access_token;
      }
      
      var _getGenres = async (token) => {

        var result = await fetch(`https://api.spotify.com/v1/browse/categories`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });
        
        var data = await result.json();
        return data.categories.items;
      }

      async function getTrack()
      var _getTrack = async (token, trackEndPoint) => {

        var result = await fetch(`${trackEndPoint}`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });

        var data = await result.json();
        return data;
      }

      var _getTracks = async (token, tracksEndPoint) => {

        var limit = 10;

        var result = await fetch(`${tracksEndPoint}?limit=${limit}`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        })
              
        var data = result.json();
            return data.items;
      }

      var _getArtist = async (token, artistEndPoint) => {

        var result = await fetch(`${artistEndPoint}`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });

        var data = await result.json();
        return data;
      }

      var _getArtists = async (token, artistsEndPoint) => {

        var limit = 10;

        var result = await fetch(`${artistsEndPoint}?limit=${limit}`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        })
              
        var data = result.json();
            return data.items;
      }

      var _getAlbum = async (token, albumEndPoint) => {

        var result = await fetch(`${albumEndPoint}`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });

        var data = await result.json();
        return data;
      }

      var _getAlbums = async (token, albumsEndPoint) => {

        var limit = 10;

        var result = await fetch(`${albumsEndPoint}?limit=${limit}`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });

        var data = await result.json();
        return data.items;
      }

      return {
        getToken() {
            return _getToken();
        },
        getGenres(token) {
            return _getGenres(token);
        },
        getTracks(token, tracksEndPoint) {
            return _getTracks(token, tracksEndPoint);
        },
        getTrack(token, trackEndPoint) {
            return _getTrack(token, trackEndPoint);
        },
        getArtist(token, artistEndPoint) {
            return _getArtist(token, artistEndPoint);
        },
        getArtists(token, artistsEndPoint) {
            return _getArtists(token, artistsEndPoint)
        },
        getAlbum(token, albumEndPoint) {
            return _getAlbum(token, albumEndPoint);
        },
        getAlbums(token, albumsEndPoint) {
            return _getAlbums(token, albumsEndPoint);
        },
      }
  })();