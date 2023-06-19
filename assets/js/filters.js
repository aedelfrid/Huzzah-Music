var categories;

import { accessToken } from './auth.js';

var token = await accessToken;
console.log(token);

async function categoryGet(data = {}) {
    var result = await fetch('https://api.spotify.com/v1/browse/categories', {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${token}` }
    });
    var data = await result.json()

    var categoryObj = data;
    return categoryObj
};

var categoryObj = await categoryGet();

var categoryItemsObj = await categoryObj.categories.items

//Do we remove this commented out section?

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

//Unsure if necessary, was in older version
//var categoryCollapse = document.querySelector('#categoryButton')

var categoryCollapseContent = document.querySelector('.categoryCollapse')


$('#categoryA').on('click', () => {

    while (categoryCollapseContent.firstChild) {
        categoryCollapseContent.removeChild(categoryCollapseContent.firstChild);
    }


    for (var i = 0; i < categoryItemsObj.length; i++) {
        var categoryName = categoryItemsObj[i].name
        var categorySelect =
            (`<div class="card card-body" id='filterCard${i}'>
            <div class="filterBox ml-7"> 
                <div class="form-check"> <input id='checkBox' class="form-check-input" type="checkbox" value="${categoryName}" id="flexCheckDefault"> <label class="form-check-label" for="flexCheckDefault"> ${categoryName} </label> </div
            </div>
        </div>`)
        categoryCollapseContent.insertAdjacentHTML('beforeend', categorySelect)

        $(`#filterCard${i}`).on('click', (e) => {
            console.log(e)
        })
    }

});

