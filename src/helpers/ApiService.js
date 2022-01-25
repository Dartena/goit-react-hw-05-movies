import { prepareForShow } from "./helpers";
const BASE_URL = "https://api.themoviedb.org/3";
const KEY = "6d1c39b2eb21d203d6645fb071dab8ba";

class ApiService {
  constructor() {
    this.page = 1;
    this.includeAdult = false;
  }

  async getTrendingMovies() {
    const url = `${BASE_URL}/trending/movie/day?api_key=${KEY}&language=ru-RU&&page=${this.page}&include_adult=${this.includeAdult}`;
    const response = await fetch(url);
    const result = await response.json();
    return result.results;
  }

  async searchMovie(query) {
    const url = `${BASE_URL}/search/movie?api_key=${KEY}&language=ru-RU&query=${query}&page=${this.page}&include_adult=${this.includeAdult}`;
    const response = await fetch(url);
    const result = await response.json();

    return result.results;
  }

  async getMovieById(id) {
    const url = `${BASE_URL}/movie/${id}?api_key=${KEY}&language=ru-RU`;
    const response = await fetch(url);
    const result = await response.json();
    this.console(result);
    if (result.success === false) {
      return result;
    }
    if (result.poster_path)
      result.poster_path =
        "https://image.tmdb.org/t/p/w500" + result.poster_path;
    if (result.genres) result.genres = result.genres.map((genre) => genre.name);
    prepareForShow(result);
    return result;
  }

  async getCredits(id) {
    const url = `${BASE_URL}/movie/${id}/credits?api_key=${KEY}&language=ru-RU`;
    const response = await fetch(url);
    const result = await response.json();
    const cast = result.cast;
    cast.map((movie) => {
      if (movie.profile_path)
        movie.profile_path =
          "https://image.tmdb.org/t/p/w500" + movie.profile_path;

      return movie;
    });
    return cast;
  }

  async getReviews(id) {
    const url = `${BASE_URL}/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`;
    const response = await fetch(url);
    const result = await response.json();
    return result.results;
  }

  console(response) {
    console.log(response);
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}

const api = new ApiService();

export default api;
