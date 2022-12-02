import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [author, setAuthors] = useState([]);

  useEffect(() => {
    async function fetchAuthors() {
      const response = await axios.get("http://localhost:4000/author");

      setAuthors(response.data);
    }
    fetchAuthors();
  }, []);

  return (
    <div className="App">
      {author.map((currentAuthor) => {
        return <p>{currentAuthor.name}</p>;
      })}
    </div>
  );
}

export default App;
