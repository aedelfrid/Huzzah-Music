var accessToken;

import {spotifyClientID} from './key.js'
import {spotifySecret} from './key.js'

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


async function categoryGet(data = {}) {
    const result = await fetch('https://api.spotify.com/v1/browse/categories?country=CA&limit=50',{
        method:'GET',
        headers:{ 'Authorization' : `Bearer ${accessToken}`
    }});
    
    var data = await result.json()
    console.log(data)

};

authorization();