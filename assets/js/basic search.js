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
  // the following elements are created and added to the DOM
  // It creates HTML elements dynamically using JavaScript and appends them to the DOM
    var searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.className = "form-control";
    searchInput.id = "searchInput";
    
  
    var label = document.createElement("label");
    label.textContent = "Basic Search:";
    label.htmlFor = "searchInput";
    label.style.display = "block";
    label.style.fontWeight = "bold";
    label.style.marginBottom = "10px";
  
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
   
     
    // Create a div element for displaying the search results
    var resultsDiv = document.createElement("div");
    resultsDiv.id = "results";
    resultsDiv.className = "card-deck d-flex flex-wrap" ;
    container.appendChild(resultsDiv);
    
    // Add a click event listener to the search button
    searchButton.addEventListener("click", async function () {
      // Call the _search function with the value of the search inpuT  
      const data= await _search(searchInput.value);
      console.log("results",data);
      displayResults(data)
    });
  
   
  
      function displayResults(data) {
      resultsDiv.innerHTML = "";
      // the items array will now contain all the search results from the different categories, 
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
        
        // used to create an image element dynamically and set its source based on the available image URLs from the item object                           
  
        var image = document.createElement("img");
        if (item.images && item.images.length > 0) {
          image.src = item.images[0].url;
        } else if (item.album && item.album.images && item.album.images.length > 0) {
          image.src = item.album.images[0].url;
        } else {
          image.src = "placeholder.jpg";
        }
        image.className = "img-fluid rounded-start";
  
        // Add additional styles to the image element
       
        image.className = "img-fluid rounded-start";
        image.style.width = "1200px"; // Set the desired width
        image.style.height = "300px"; // Set the desired height
        cardSecondDivForImage.appendChild(image);
        
        
        // creates a card layout with a styled title and a colored background.
        var cardSecondDivForTitle = document.createElement("div");
        cardSecondDivForTitle.className = "col-md-8";
        cardSecondDivForTitle.style.backgroundColor = "lightblue"; // Set background color
        cardSecondDivForTitle.style.padding = "2px"; // Set padding
        cardSecondDivForTitle.style.marginBottom = "10px"; // Add margin bottom to separate displays
        cardFirstDiv.appendChild(cardSecondDivForTitle)
        
  
        var cardBody = document.createElement("div");
        cardBody.className = "card-body";
        cardBody.style.padding = "20px"; // Set padding
        cardBody.style.color = "blue"; // Set text color
        cardSecondDivForTitle.appendChild(cardBody)

        var cardBodyRow = document.createElement("div");
        cardBodyRow.className = "row";
        cardBody.appendChild(cardBodyRow)

        var cardBodyCol = document.createElement("div");
        cardBodyCol.className = "col";
        cardBodyRow.style.margin = "0 -10px"; // Add negative margin to counteract the padding of columns
        cardBodyRow.style.backgroundColor = "lightgray"; // Set background color
        cardBody.appendChild(cardBodyCol)
      
        // creates a card layout with a styled title, star icon, and a button
        var title = document.createElement("h5");
        title.className = "card-title";
        title.textContent = item.name;
        title.style.color = "purple"; // Set text color
        title.style.fontWeight = "bold"; // Set font weight
        cardBodyCol.appendChild(title);
                        
        var heartIcon = document.createElement("i");
        heartIcon.className = "fa fa-heart";
        heartIcon.style.color = "white";
        heartIcon.style.float = "right"; // Align to the right
        title.appendChild(heartIcon);
        
        var button = document.createElement("button");
        button.textContent = "Play";
        button.className = "btn btn-primary";
        button.style.backgroundColor = "blue";
        button.style.color = "white";
        button.style.border = "none";
        button.style.padding = "10px 20px";
        button.style.borderRadius = "5px";
        cardBodyCol.appendChild(button);
        button.addEventListener("click", function() {
          window.open(item.external_urls.spotify, "_blank");
    });
         
          var description = document.createElement("p");
          description.className = "card-text";
          description.textContent = item.type === 'artist' ? 'Artist' : 'Album';
          cardBodyCol.appendChild(description);
      
        if (item.artists && item.artists.length > 0) {
          var artist = document.createElement("p");
          artist.className = "card-text";
          artist.textContent = item.artists[0].name;
          cardBodyCol.appendChild(artist);
        }
        
        resultsDiv.appendChild(cardFirstDiv);
      });
    }
  });
  