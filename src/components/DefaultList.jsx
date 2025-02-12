import React, { useEffect, useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";


const DefaultList = () => {
  const [movies, setMovies] = useState([]);

const navigate = useNavigate();
  const onTitleclick = (movieId) => {
    navigate(`/movie/${movieId}`); // Correct route
  };

  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies() {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
    {
          headers: {
            "Content-type": "application/json",
          },
          method: "GET",
        }
      );

      if (response.ok) {
        const data = await response.json();
        setMovies(data.results);
      } else {
        console.error("Failed to fetch movies.");
      }
    } catch (error) {
      console.error("An error occurred while fetching movies:", error);
    }
  }

  return (
    <div className="MovieList">
      {movies.map((movie) => {
        return (
          <div className="movie" onClick={() => onTitleclick(movie.id)} key={movie.id}>
            <div className="image-container">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </div>

            <div className="movie-details">
              <h3 className="movie-title">{movie.title}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DefaultList;