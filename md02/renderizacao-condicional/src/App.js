import movies from "./data";
import { Card } from "./components/Card";

function App() {
  return (
    <>
      {movies.map((currentElement) => {
        return (
          <Card
            title={currentElement.original_title}
            overview={currentElement.overview}
            imgSrc={currentElement.backdrop_path}
            score={currentElement.vote_average}
            // Toda vez que redenrizar uma array, lembre de colocar o atributo key com um valor unico (que não se reptia para os outros elemento)
            // NÃO USE O INDEX DO ELEMENTO, NÃO É UMA BOA PRATICA
            key={currentElement.original_title}
          />
        );
      })}
    </>
  );
}

export default App;
