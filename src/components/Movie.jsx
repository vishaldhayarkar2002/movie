import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Movie = ({ movies }) => {
  const navigate = useNavigate();

  return (
    <div className="MovieList">
      {movies.map(({ id, poster_path, title }) => (
        <div key={id} className="movie" onClick={() => navigate(`/movie/${id}`)}>
          <div className="image-container">
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
          </div>
          <h3 className="movie-title">{title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Movie;
