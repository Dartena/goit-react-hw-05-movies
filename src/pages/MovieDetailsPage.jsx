import api from "../helpers/ApiService";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  MovieDetailsContainer,
  MovieInfo,
  MovieTitle,
  Poster,
  TextP,
  SLink,
} from "../styles/styled";
import Button from "../components/Button";

export default function MovieDetailsPage() {
  const [movieInfo, setMovieInfo] = useState([]);
  let movieId = useParams().movieId;
  const navigate = useNavigate();

  useEffect(() => {
    async function getMovieInfo() {
      const movie = await api.getMovieById(movieId);
      setMovieInfo(movie);
    }
    getMovieInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goBackHandle = () => {
    navigate(-1);
  };

  return (
    <div>
      <Button textContent={"Go Back"} onClick={goBackHandle}></Button>
      <MovieDetailsContainer>
        <Poster src={movieInfo.poster_path} alt="" />
        <MovieInfo>
          <MovieTitle>
            {movieInfo.title}({movieInfo.release_year})
          </MovieTitle>
          <TextP>User score: {`${movieInfo.vote_average}%`}</TextP>
          <h3>Overview</h3>
          <TextP>{movieInfo.overview}</TextP>
          <h3>Genres</h3>
          <TextP>{movieInfo.genreShow}</TextP>
        </MovieInfo>
      </MovieDetailsContainer>
      <div>
        <SLink to={`/movies/${movieId}/cast`} replace={true}>
          Cast
        </SLink>
        <SLink to={`/movies/${movieId}/reviews`} replace={true}>
          Reviews
        </SLink>
      </div>
      <Outlet />
    </div>
  );
}
