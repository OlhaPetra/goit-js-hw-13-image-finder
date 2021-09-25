import ImagesApiService from './js/apiService.js';
import refs from './js/refs';
const { searchForm, imgContainer } = refs;

import LoadMoreButton from './js/load-more-btn';
import imgTempl from './tamplate/imgTempl.hbs';

const loadMoreBtn = new LoadMoreButton({
  selector: '[data-action="load-more"]',
  hidden: false,
});

searchForm.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener('click', fethNewImg);

const imagesApiService = new ImagesApiService();

function onSearch(e) {
  e.preventDefault();

  imagesApiService.query = e.currentTarget.elements.query.value.trim();

  if (imagesApiService.query === '') {
    return alert('Enter what you want to find');
  }

  loadMoreBtn.show();
  imagesApiService.resetPage();
  clearImgMarkup();
  fethNewImg()

}

function fethNewImg(){
  loadMoreBtn.disabled();
  imagesApiService.fetchImages().then(imgs => {
    appendImgMarkup(imgs);
    loadMoreBtn.enable();
  });
}

function appendImgMarkup(imgs) {
  imgContainer.insertAdjacentHTML('beforeend', imgTempl(imgs));
}

function clearImgMarkup() {
  imgContainer.innerHTML = '';
}