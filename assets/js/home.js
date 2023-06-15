//awicks44 / Javascript-SpotifyAPI - taken the function fetching authentification token through Client ID and Client Secret

var apiControl = (function() {

    var clientId = 'd01ca5196e4a44a7b2baa7c1da7d98c2';
    var clientSecret = 'e6b876c5e98c4f97b6ade347035aaddb';

    var _getToken = async () => {

        var result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded',
                'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            body: 'grant-type=client_credentials'
        });

        var data = await SpeechRecognitionResultList.json();
        return data.access_token;
        
    }});