const clientId = 'd01ca5196e4a44a7b2baa7c1da7d98c2';
const clientSecret = 'e6b876c5e98c4f97b6ade347035aaddb';

// private methods
const _getToken = async () => {

    const result = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded', 
            'Authorization' : 'Basic ' + btoa( clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    });

    const data = await result.json();
    console.log("token_outside-search",data,data.access_token)
    return data.access_token;
}
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
  