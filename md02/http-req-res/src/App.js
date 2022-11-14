import axios from "axios";

import { Card } from "./components/Card";
import { useState, useEffect } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  console.log(movies);

  // THEN CATCH
  // axios
  //   .get(
  //     "https://api.themoviedb.org/3/discover/movie?api_key=1dbc566a4812e099606bf66f83159d6e"
  //   )
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  //  ASYNC AWAIT combinado com Try/Catch

  useEffect(() => {
    async function fetchMovies() {
      try {
        const moviesAPI = await axios.get(
          "https://api.themoviedb.org/3/discover/movie?api_key=1dbc566a4812e099606bf66f83159d6e"
        );

        setMovies(moviesAPI.data.results);
      } catch (err) {
        console.log(err);
      }
    }

    fetchMovies();
  }, []);

  return (
    <div className="App">
      {movies.map((currentMovie) => {
        return (
          <Card
            original_title={currentMovie.original_title}
            img={`https://image.tmdb.org/t/p/w500${currentMovie.backdrop_path}`}
            overview={currentMovie.overview}
          />
        );
      })}
    </div>
  );
}

export default App;
