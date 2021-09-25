export default class NewApiService {
  constructor() {}

  fetchImages() {
    const API_KEY = '23556027-7518a6338651e19ee58531f7f';
    const BASE_URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';

    fetch(`${BASE_URL}&q=${searchQuery}&page=1&per_page=12&key=${API_KEY}`)
      .then(r => r.json())
      .then(console.log);
  }
}
