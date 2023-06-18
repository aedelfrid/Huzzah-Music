var accessToken;

import {spotifyClientID} from './key.js'
import {spotifySecret} from './key.js'

async function authorization(data = {}) {
    data = await fetch('https://accounts.spotify.com/api/token',{
        method:'POST',
        headers:{ 
            'Content-Type' : 'application/x-www-form-urlencoded',
            'Authorization' : 'Basic ' + btoa(spotifyClientID + ':' + spotifySecret),
    },
    body: 'grant_type=client_credentials'
});

        var tokenObj = await data.json()
        var accessToken = tokenObj.access_token;
        console.log(accessToken);
        return accessToken;
};
var accessToken = authorization();

/*(function callEveryHour() {
    setInterval( accessToken = authorization(), 1000 * 60 * 60);
}())*/

export {accessToken};

