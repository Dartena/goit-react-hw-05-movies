import { useEffect, useLayoutEffect, useState } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import api from "../helpers/ApiService";

export default function MoviesPage() {
  const [searchParam, setSearchParam] = useSearchParams("");
  const [searchResult, setSearchResult] = useState([]);
  const [query, setQuery] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const { value } = e.target.query;
    setSearchParam({ query: value });
    setQuery(value);
  };
  useEffect(() => {
    if (searchParam.has("query")) {
      setQuery(searchParam.get("query"));
    }
    return () => {
      setSearchResult([]);
    };
  }, [searchParam]);

  useLayoutEffect(() => {
    if (query === "") return;
    async function searchMovie() {
      const result = await api.searchMovie(query);
      setSearchResult(result);
    }
    searchMovie();
  }, [query]);

  return (
    <div>
      <div>
        <SearchBar onSubmit={onSubmitHandler} />

        <ul>
          {searchResult.map((result) => {
            return (
              <li key={result.id}>
                <Link to={`/movies/${result.id}`}>{result.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <Outlet />
    </div>
  );
}
