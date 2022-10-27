import axios from "axios";

const KEY = `7770a554235a470dd8487676c4d97407`;

export class ServerApi {
    baseUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}`;

    async getMovie() {
        const data = await axios ({
            url: `https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}`,
        });
        const movies = await data.data;
        console.log(movies);
        return movies;
    }
}

