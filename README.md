# GoodsCentral

## Description

This application serves as a book search and repository. Using Google Books API and Amazon's Product API, this website seeks to provide book information matching the search criteria (general) in the search bar or in the advanced search fields (title, author, series, and subject).
These searches will then populate a list of books matching these criteria. These books will be available to add to a wishlist, and the detailed information including synopsis will be available upon clicking on the title or the book cover image. Furthermore, information about acquiring the book through libraries or through an online merchant.

More information and local merchant options to follow once API functionality is assured.
### User Story

As a consumer,
I want to find books matching my interests and add them to a wishlist or find some way to purchase them.

### Acceptance Criteria

Given that I wish to find books,
When I type a title, author, series, subject, or other option in a search bar,
Then I want to find a corresponding book to buy or borrow.
When I click on a book listing,
Then I am presented with the details of, and the location, where a book can be found.
When I click the star button,
Then I can save a listing to my wishlist.
When I click share,
Then I can share my wishlist with my friends on various social media.
When I click on a listing,
Then I can see from where the book may be bought or borrowed.

## Usage

Only the websites' HTML skeleton has been coded. The information provided in the Roadmap below points to the goal usage.
## Roadmap
Upon accessing the website application, one must type a search term to find a matching book pulled from Google Books or Amazon Products APIs. Searching for a general term, or using advanced search to search for specific title, author, series, or subject, will populate a javascript produced book list. Books populated in this list are able to be added to a wishlist by clicking the star icon in the corresponding entry. This wishlist will be available on a separate page and reachable through an ever present link in the navbar.
Each generated book item will also be clickable on title, author, or cover image, to display more detailed information including synopsis, tags, and other meta information. This will also be display information on a separate page, which will also provide the option to add the book to a wishlist by including a toggle-enabled star button.
From the wishlist page, it will be possible to share a book's information to friends on various social media platforms. (Choose one main platform with which to begin.)

## Credits

Code developed by Alexander McKinnon (github.com/aedelfrid), Neerajaa Narayanan (github.com/hineeraja), and Benoît DesRoches (github.com/benhwaet).
Bootstrap, Bulma, and MongoDB frameworks used (and modified to fit) where indicated **(don't forget to indicate).

## License

MIT License, see repository for full license file.