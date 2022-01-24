import api from "../helpers/ApiService";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ReviewList } from "../styles/styled";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  let movieId = useParams().movieId;
  useEffect(() => {
    async function getReviews() {
      const result = await api.getReviews(movieId);
      setReviews(result);
    }
    getReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return reviews.length > 0 ? (
    <ReviewList>
      {reviews.map((review) => {
        return (
          <li key={review.id}>
            <h3>Author: {review.author}</h3>
            <p>{review.content}</p>
          </li>
        );
      })}
    </ReviewList>
  ) : (
    <p>We don't have any reviews for this movie.</p>
  );
}
