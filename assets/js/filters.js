var categories;

import {accessToken} from './auth.js';

var token = await accessToken

console.log(token)


var searchResults;

//var pageNum = 0;
//var searchQuery = 'Electrelane';
//var types = 'track' + '%2c' + 'artist' ;
//var resultLimit = '50';
//var offset = resultLimit*pageNum;

async function categoryGet(data={}) {
    var result = await fetch('https://api.spotify.com/v1/browse/categories', {
        method:'GET',
        headers:{ 'Authorization' : `Bearer ${token}`}
    });
    var data = await result.json()
    var categoryObj = data.items
        return categoryObj
};

categoryGet()

/*async function searchTracks(accessToken, data = {}) {
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
};*/

var categoryCollapse = document.querySelector('#categoryButton')