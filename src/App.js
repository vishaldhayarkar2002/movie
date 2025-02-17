import "./App.css";
import SearchBar from "./components/SearchBar";
import { Routes, Route } from "react-router-dom";
import Detail from "./components/Detail";
import Profile from './component/Profile';
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
    <Route path="/profile" element={<Profile />} />
    </Routes>

    
  );
}

export default App;
