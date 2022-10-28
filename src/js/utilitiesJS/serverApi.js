import axios from 'axios';

const KEY = `7770a554235a470dd8487676c4d97407`;

 class ServerApi {
  KEY = `api_key=7770a554235a470dd8487676c4d97407`;
  baseUrl = `https://api.themoviedb.org/3`;
  baseSrc = `https://image.tmdb.org/t/p/w500`;
  
  async getPopularMovie() {
    const data = await axios({
      url: `${this.baseUrl}/trending/movie/week?${this.KEY}`,
    });

    return await data.data;
  }

  async getMovieOnDemand(query) {
    const data = await axios({
      url: `${this.baseUrl}/search/movie?${this.KEY}&language=en-US&page=1&include_adult=false&query=${query}`,
    });
    console.log(data.data.results);
    return await data.data.results;
  }

  async getDetailsMovie(id) {
    const data = await axios({
      url: `${this.baseUrl}/movie/${id}?${this.KEY}&language=en-US`,
    });
    return await data.data;
  }
}

export const serverApi = new ServerApi();
