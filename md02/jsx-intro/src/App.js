import Card from "./components/Card";
import { Navbar } from "./components/Navbar";

import Dog from "./assets/cachorrinho.webp";
import Cat from "./assets/gato.jpg";

function App() {
  return (
    <>
      <Navbar />
      <Card title="Card 1" description="Exemplo de props" img={Dog} />
      <Card title="Card 2" description="To mudando" img={Cat} />
      <Card title="Card 3" description="Sou flex" />
    </>
  );
}

export default App;
