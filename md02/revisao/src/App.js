import { Button } from "./components/Button";

function App() {
  return (
    <>
      <h1>Hello</h1>
      <p>Tudo bem?</p>

      <Button qualquerCoisa="Oi">O que tiver aqui é props.children</Button>
    </>
  );
}

export default App;
