import React, { useState } from "react";
import Movie from "./Movie";
import DefaultList from "./DefaultList";
import "../App.css";
import { useNavigate } from "react-router-dom";
import LoginButton from "../component/LoginButton";
import LogoutButton from "../component/LogoutButton";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  async function searchMovie(query) {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=fec764d0db77f31da268b3bd79c0a782&query=${query}`
      );

      if (response.ok) {
        const data = await response.json();
        setMovies(data.results);
        setError("");
      } else {
        setError("An error occurred while fetching movies.");
        setMovies([]);
      }
    } catch (error) {
      setError("An error occurred while fetching movies.");
      setMovies([]);
    }
  }

  function handleSearch(e) {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim() !== "") {
      searchMovie(query);
    } else {
      setMovies([]);
      setError("");
    }
  }

  return (
      <div className="container mt-5">
      <form className="form">
      <h4 className="text-center mb-4 font-weight-bold ">Movie App</h4>
        <div className="input-group mb-3">
          <input
            type="text"
            placeholder="Search"
            onChange={handleSearch}
            value={searchQuery}
            className="form-control"
          />
        </div>

        <div className="d-flex justify-content-between">
          <button 
            className="btn btn-primary 
            mx-5 my-5 px-4"
            onClick={() => navigate(`/profile`)}
          >
            Profile
          </button>
          <LoginButton />
          <LogoutButton />
        </div>
      </form>

      
      {error && <p>{error}</p>}

      {searchQuery ? <Movie movies={movies} /> : <DefaultList />}
    </div>
  );
};

export default SearchBar;
