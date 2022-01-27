import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import api from "../helpers/ApiService";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function getTrending() {
      const trending = await api.getTrendingMovies();
      setMovies(trending);
    }
    getTrending();
  }, []);

  return (
    <div>
      <ul>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
