import api from "../helpers/ApiService";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
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
  const location = useLocation();

  useEffect(() => {
    async function getMovieInfo() {
      const movie = await api.getMovieById(movieId);
      if (movie.success === false) {
        return (
          console.log("Toast here"),
          toast.error(`${movie.status_message}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }),
          navigate("/")
        );
      }
      setMovieInfo(movie);
    }
    getMovieInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goBackHandle = () => {
    navigate(location?.state?.from ?? "/");
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
        <SLink
          to={`/movies/${movieId}/cast`}
          state={{ from: location?.state?.from ?? "/" }}
        >
          Cast
        </SLink>
        <SLink
          to={`/movies/${movieId}/reviews`}
          state={{ from: location?.state?.from ?? "/" }}
        >
          Reviews
        </SLink>
      </div>
      <Outlet />
    </div>
  );
}
