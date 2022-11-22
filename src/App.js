import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import MoviePage from "./components/MoviePage";
import { createContext, useState } from "react";

export const userLoggedInContext = createContext(null);
function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  return (
    <userLoggedInContext.Provider  value = {[isUserLoggedIn,setIsUserLoggedIn]}>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:movieId" element={<MoviePage />} />
    </Routes>
    </userLoggedInContext.Provider>
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
