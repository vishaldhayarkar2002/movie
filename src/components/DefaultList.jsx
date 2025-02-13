import React, { useEffect, useState, useCallback } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const DefaultList = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const navigate = useNavigate();

  const fetchMovies = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);

    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=${page}`
      );

      if (!res.ok) throw new Error("Failed to load movies");

      const data = await res.json();
      setMovies((prev) => [...prev, ...data.results]);
      setHasMore(data.results.length > 0);
      setPage((prev) => prev + 1);
    } catch (err) {
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  }, [page, loading, hasMore]);

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 100) {
        fetchMovies();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [fetchMovies]);

  return (
    <div className="MovieList">
      {movies.map((movie) => (
        <div key={movie.id} className="movie" onClick={() => navigate(`/movie/${movie.id}`)}>
          <div className="image-container">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          </div>
          <h3 className="movie-title">{movie.title}</h3>
        </div>
      ))}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default DefaultList;
