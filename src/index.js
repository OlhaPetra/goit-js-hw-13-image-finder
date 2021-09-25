import ImagesApiService from './js/apiService.js';
import imgTempl from './tamplate/imgTempl.hbs';

const ref = {
  searchForm: document.getElementById('search-form'),
  imgContainer: document.querySelector('.images'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};

ref.searchForm.addEventListener('submit', onSearch);
ref.loadMoreBtn.addEventListener('click', OnLoadMore);

const imagesApiService = new ImagesApiService();

function onSearch(e) {
  e.preventDefault();

  imagesApiService.query = e.currentTarget.elements.query.value.trim();
  imagesApiService.resetPage();
  imagesApiService.fetchImages().then(imgs => {
    clearImgMarkup();
    appendImgMarkup(imgs);
  });
}

function OnLoadMore() {
  imagesApiService.fetchImages().then(appendImgMarkup);
}

function appendImgMarkup(imgs) {
  ref.imgContainer.insertAdjacentHTML('beforeend', imgTempl(imgs));
}

function clearImgMarkup() {
  ref.imgContainer.innerHTML = '';
}
