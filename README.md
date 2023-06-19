# Huzzah Music

## Description

This application serves as a music search and repository. Using Spotify API and Discogs API, this website seeks to provide music information matching the search criteria (general) in the search bar or in the advanced search fields (music items: track, artist, album, and genre).
These searches will then populate a list of music items matching these criteria. These items will be available to add to a wishlist, and the detailed information including possibility to play the item(s) will be available upon clicking on the "Play on Spotify" button. Furthermore, information about acquiring the music through an online merchant should be found through Spotify or Discogs.

More information and local merchant options to follow once API functionality is assured.

### User Story

As a consumer,
I want to find music matching my interests and add them to a wishlist or find some way to purchase them.

### Acceptance Criteria

Given that I wish to find music,
When I type a track, artist, album, or other option in a search bar,
Then I want to find a corresponding album to buy.
When I click on a music listing,
Then I am presented with the details of, and the location, where an album can be found.
When I click the heart button,
Then I can save a listing to my wishlist.
When I click share,
Then I can share my wishlist with my friends on various social media.
When I click on a listing,
Then I can see from where the album may be bought or played.

## Usage

//Deployed application website '<https://aedelfrid.github.io/Huzzah-Music/>'
//Application GitHub repository '<https://github.com/aedelfrid/Huzzah-Music>'

Upon accessing the website application, one must type a search term to find matching music items pulled from Spotify API and/or Discogs API. Searching for a general term, or using advanced search to search for specific tracks, artists, albums, or genres, will populate a javascript produced music list.

Music items populated in this list are then able to be added to a wishlist by clicking the heart icon in the corresponding entry. This wishlist will be available on a separate page and reachable through an ever present link in the navbar.

Each generated music item will also have a clickable button below the track title, artist name, album name, and/or genre types, leading one to the Spotify page containing more information about the item.

## Roadmap

These following items are future goals in the development of this app:

The ability to save items to local storage and to display them on a wishlist page is not complete. Ideally, there would be a dropdown menu or accessible modal to display the wishlist/favourites list according to all search types: tracks, artists, albums, genres. In addition, it could also be possible to create playlists on Huzzah Music that could be played on Spotify.

The Discogs API has not been implemented, but would permit the user to find musical items available on the marketplace. The possibility of adding YouTube API to complement Spotify exists, though their terms and conditions may prohibit this.

We are still working on a Filter function narrowing down the results by genre, using a dropdown menu to choose the genre/category.

From the wishlist page, it will be possible to share music information to friends on various social media platforms. (Choose one main platform with which to begin.)

## Credits

Code developed by Alexander McKinnon (github.com/aedelfrid), Neerajaa Narayanan (github.com/hineeraja), and Benoît DesRoches (github.com/benhwaet).
Bootstrap, Bulma, and MongoDB frameworks used (and modified to fit).

## License

MIT License, see repository for full license file.
