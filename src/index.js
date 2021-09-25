import NewApiService from './js/apiService'

const ref = {
  searchForm: document.getElementById('search-form'),
  imgContainer: document.querySelector('.images'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]')
};

/* 
console.log(ref.imgContainer) 
console.log(ref.loadMoreBtn)*/

ref.searchForm.addEventListener('submit', onSearch);
ref.loadMoreBtn.addEventListener('click', OnLoadMore)

let searchQuery = ''

function onSearch(e) {
  e.preventDefault();


  searchQuery = e.currentTarget.elements.query.value;
  
}


function OnLoadMore() {
/*   const API_KEY = '23556027-7518a6338651e19ee58531f7f';
  const BASE_URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';
    const searchQuery = e.currentTarget.elements.query.value;
    console.log(searchQuery)

  fetch(`${BASE_URL}&q=${searchQuery}&page=1&per_page=12&key=${API_KEY}`)
    .then(r => r.json())
    .then(console.log); 
*/
}
