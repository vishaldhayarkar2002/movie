import logo from "./logo.svg";
import "./App.css";
import Movie from "./components/Movie";
import SearchBar from "./components/SearchBar";
import { Routes, Route } from "react-router-dom";
import Detail from "./components/Detail";

function Home() {
  return (
    <div className="App">
      <SearchBar></SearchBar>
    </div>
  );
}

function App() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/movie/:id" element={<Detail />} />
    </Routes>

    
  );
}

export default App;
