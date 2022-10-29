import axios from 'axios';

const KEY = `7770a554235a470dd8487676c4d97407`;

class ServerApi {
  #page = 1;
  total_results = 200;

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

    return await data.data;
  }

  async getDetailsMovie(id) {
    const data = await axios({
      url: `${this.baseUrl}/movie/${id}?${this.KEY}&language=en-US`,
    });
    return await data.data;
  }

  async getTrailer(id) {
    const data = await axios({
      url: `${this.baseUrl}/movie/${id}?${this.KEY}&language=en-US`,
    });
    return await data;
  }

  setPage(page) {
    this.#page = page;
  }

  setTotalResults(total) {
    this.total_results = total;
  }
}

export const serverApi = new ServerApi();
