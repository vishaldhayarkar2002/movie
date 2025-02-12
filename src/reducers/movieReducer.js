import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
  selectedMovie: null,
  isLoading: false,
  error: null,
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    fetchMoviesRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchMoviesSuccess: (state, action) => {
      state.isLoading = false;
      state.movies = action.payload;
    },
    fetchMoviesFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    fetchMovieDetailsSuccess: (state, action) => {
      state.selectedMovie = action.payload;
    },
  },
});

export const {
  fetchMoviesRequest,
  fetchMoviesSuccess,
  fetchMoviesFailure,
  fetchMovieDetailsSuccess,
} = movieSlice.actions;

export default movieSlice.reducer;
