const ref = {
  searchForm: document.getElementById('search-form'),
  imgContainer: document.querySelector('.images'),
};

/* console.log(ref.searchForm)
console.log(ref.imgContainer) */

ref.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  const API_KEY = '23556027-7518a6338651e19ee58531f7f';
  const BASE_URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';
    const searchQuery = e.currentTarget.elements.query.value;
    console.log(searchQuery)

  fetch(`${BASE_URL}&q=${searchQuery}&page=1&per_page=12&key=${API_KEY}`)
    .then(r => r.json())
    .then(console.log);
}
