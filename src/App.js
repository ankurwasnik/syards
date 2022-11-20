import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import MoviePage from "./components/MoviePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:movieId" element={<MoviePage />} />
    </Routes>
  );
}

export default App;
// function App() {
//   return (
//     <HomePage/>

//     // <MoviePage
//     // id = '63791e05f393ba726becf519'
//     // title = 'The Dark Knight'
//     // thumbnail = 'the_dark_knight.jpg'
//     // releaseYear = '2008-01-01T00:00:00.000+0000'
//     // averageRating = '9'
//     // />
//   );
