// CRIADOS NA MÃO

import { Button } from "./components/Button";
import { Navbar } from "./components/Navbar";
import { Exemplo } from "./components/Exemplo";

// PRONTOS DO REACT-BOOTSTRAP

import ButtonReactBootstrap from "react-bootstrap/Button";
import NavbarBootstrap from "./components/NavbarBootstrap";

function App() {
  return (
    <div className="App">
      {/* Bootstrap */}
      <Navbar />
      <Button>Clique aqui</Button>
      <Exemplo />

      {/* React-Bootstrap */}
      <NavbarBootstrap />
      <ButtonReactBootstrap variant="danger">Ui!</ButtonReactBootstrap>
    </div>
  );
}

export default App;
