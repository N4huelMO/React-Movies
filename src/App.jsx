import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Serie from "./pages/Serie";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movie/:movieId" element={<Movie />} />
      <Route path="serie/:serieId" element={<Serie />} />
    </Routes>
  );
}

export default App;
