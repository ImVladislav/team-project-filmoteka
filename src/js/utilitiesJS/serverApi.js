import axios from 'axios';
import Notiflix from 'notiflix';

class ServerApi {
  #page = 1;
  totalResults = 20000;
  requestCount = 1;
  language = 'en-US';
  trend = 'week';

  KEY = `api_key=7770a554235a470dd8487676c4d97407`;
  baseUrl = `https://api.themoviedb.org/3`;
  baseSrc = `https://image.tmdb.org/t/p/w500`;

  async getPopularMovie() {
    const data = await axios({
      url: `${this.baseUrl}/trending/movie/${this.trend}?${this.KEY}&page=${
        this.#page
      }&language=${this.language}`,
    });

    return await data.data;
  }

  async getMovieOnDemand(query) {
    const data = await axios({
      url: `${this.baseUrl}/search/movie?${this.KEY}&language=${
        this.language
      }&page=${this.#page}&include_adult=false&query=${query}`,
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
    try {
      const data = await axios({
        url: `${this.baseUrl}/movie/${id}?${this.KEY}&language=${this.language}`,
      });

      return await data.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getTrailer(id) {
    try {
      const response = await axios.get(
        `${this.baseUrl}/movie/${id}/videos?${this.KEY}&language=en-US`
      );

      return await response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getTop() {
    const data = await axios.get(
      `${this.baseUrl}/movie/top_rated?${this.KEY}&language=${
        this.language
      }&page=${this.getPage()}`
    );

    return await data.data;
  }

  async getPopular() {
    const data = await axios.get(
      `${this.baseUrl}/movie/popular?${this.KEY}&language=${
        this.language
      }&page=${this.getPage()}`
    );

    return await data.data;
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

  setlang(lang) {
    this.language = lang;
  }

  setTrend(trend) {
    this.trend = trend;
  }

  getTrend() {
    return this.trend;
  }

  getPage() {
    return this.#page > 500 ? 500 : this.#page;
  }
}

export const serverApi = new ServerApi();
