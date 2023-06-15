var accessToken;

import {spotifyClientID} from './key.js'
import {spotifySecret} from './key.js'

var searchResults;

var pageNum = 0;
var searchQuery = 'Electrelane';
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

    categoryGet(accessToken);
};

async function categoryGet(accessToken, data = {}) {
    const result = await fetch(`https://api.spotify.com/v1/search?q=${searchQuery}&type=track&limit=${resultLimit}&offset=${offset}`,{
        method:'GET',
        headers:{ 'Authorization' : `Bearer ${accessToken}`
    }});
    
    var data = await result.json()
    
    searchResults = data.tracks.items
    console.log(searchResults)

    for (var i=0;i<searchResults.length;i++) {
        console.log(searchResults[i].name)
    }
};

(function callEveryHour() {
    setInterval(authorization(), 1000 * 60 * 60);
}())