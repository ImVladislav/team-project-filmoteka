import axios from 'axios';
import Notiflix from 'notiflix';

const KEY = `7770a554235a470dd8487676c4d97407`;

class ServerApi {
  #page = 1;
  totalResults = 200;
  requestCount = 1;

  KEY = `api_key=7770a554235a470dd8487676c4d97407`;
  baseUrl = `https://api.themoviedb.org/3`;
  baseSrc = `https://image.tmdb.org/t/p/w500`;

  async getPopularMovie() {
    const data = await axios({
      url: `${this.baseUrl}/trending/movie/week?${this.KEY}&page=${this.#page}`,
    });

    return await data.data;
  }

  async getMovieOnDemand(query) {
    const data = await axios({
      url: `${this.baseUrl}/search/movie?${this.KEY}&language=en-US&page=${
        this.#page
      }&include_adult=false&query=${query}`,
    });

    if (this.requestCount === 1 && data.data.results.length) {
      Notiflix.Notify.success(`We found ${data.data.total_results} movies`, {
        position: 'center-top',
        fontFamily: 'inherit',
        borderRadius: '25px',
        clickToClose: true,
      });
    }

    return await data.data;
  }

  async getDetailsMovie(id) {
    const data = await axios({
      url: `${this.baseUrl}/movie/${id}?${this.KEY}&language=en-US`,
    });

    return await data.data;
  }

  async getTrailer(id) {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=7770a554235a470dd8487676c4d97407&language=en-US`
    );
    const data = response.json();
    return data;
  }
  // async getTrailer(id) {
  //   const data = await axios({
  //     url: `${this.baseUrl}/movie/${id}?${this.KEY}&language=en-US`,
  //   });
  //   return await data;
  // }

  setPage(page) {
    this.#page = page;
  }

  setTotalResults(total) {
    this.totalResults = total;
  }

  incrementRequestCount() {
    this.requestCount++;
  }

  setRequestCount() {
    this.requestCount = 1;
  }
}

export const serverApi = new ServerApi();
