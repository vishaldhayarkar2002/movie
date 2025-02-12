import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Detail = () => {
  const { id } = useParams();
console.log(id); // Check if it prints the movie ID correctly

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=f43ec82a5f24fe6190891894b7436c7a`
      );
      const data = await response.json();
      setMovie(data);
    };
  
    fetchMovieDetails();
  }, [id]); // Re-run when 'id' changes 


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
