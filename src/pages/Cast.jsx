import api from "../helpers/ApiService";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { CastList, CastListItem, CastPhoto } from "../styles/styled";

export default function Cast() {
  const [cast, setCast] = useState([]);

  let movieId = useParams().movieId;

  useEffect(() => {
    async function getCredits() {
      const credits = await api.getCredits(movieId);
      setCast(credits);
    }
    getCredits();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <CastList>
      {cast
        .filter((actor) => {
          return actor.profile_path;
        })
        .map((actor) => {
          return (
            <CastListItem key={actor.id}>
              <CastPhoto src={actor.profile_path} alt="" />
              <p>{actor.name}</p>
            </CastListItem>
          );
        })}
    </CastList>
  );
}
