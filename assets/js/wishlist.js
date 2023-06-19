
// HuzzahMusic-GoodsCentral/0.1 + 'https://aedelfrid.github.io/GoodsCentral/'

//To save selected track, artist, or album cards to a wishlist through local storage.
var saveBtn = document.querySelector(".saveBtn");

     saveBtn.addEventListener("click", function(event) {
        //  event.preventDefault();     
       event.parent.localStorage.setItem("trackCard", trackCardInfo);
       event.parent.localStorage.setItem("artistCard", artistCardInfo);
       event.parent.localStorage.setItem("albumCard", albumCardInfo);
     });

     var saveBtn = document.querySelector(".saveBtn");

     saveBtn.addEventListener("click", function(event) {
        //  event.preventDefault();     
       event.parent.localStorage.setItem("trackCard", trackCardInfo);
     });