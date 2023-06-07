


const navbarAutocomplete = document.querySelector('#navbar-search-autocomplete');
const navbarData = ['One', 'Two', 'Three', 'Four', 'Five'];
const navbarDataFilter = (value) => {
  return navbarData.filter((item) => {
    return item.toLowerCase().startsWith(value.toLowerCase());
  });
};

// new mdb.Autocomplete(navbarAutocomplete, {
//   filter: navbarDataFilter,
// });