import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();
  console.log(id);

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
        );
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

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
