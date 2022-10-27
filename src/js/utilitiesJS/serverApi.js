import axios from 'axios';

const KEY = `7770a554235a470dd8487676c4d97407`;

export class ServerApi {
  baseUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}`;

  async getPopularMovie() {
    const data = await axios({
      url: this.baseUrl,
    });

    return await data.data;
  }

  async getMovieOnDemand(query) {
    const data = await axios({
      url: `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${query}`,
    });
    return await data.data.results;
  }

  async getDetailsMovie(id) {
    const data = await axios({
      url: `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`,
    });
    return await data.data;
  }
}
