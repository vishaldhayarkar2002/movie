import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovieDetails } from "../actions";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movie, isLoading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
  }, [dispatch, id]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="movie-details-container">
      <div className="image-container">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      </div>

      <div className="movie-details">
        <h1 className="movie-title">{movie.title}</h1>
        <p className="movie-overview">Plot: {movie.overview}</p>
        <p className="movie-release-date">Release Date: {movie.release_date}</p>
        <p className="movie-rating">Rating: {movie.vote_average}</p>
      </div>
    </div>
  );
};

export default Detail;
