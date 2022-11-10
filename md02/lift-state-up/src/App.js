import { SideMenu } from "./components/SideMenu";
import { Picture } from "./components/Picture";
import { NewBlock } from "./components/NewBlock";

import { useState } from "react";

function App() {
  const [imgSrc, setImgSrc] = useState("");

  return (
    <>
      <div className="d-flex">
        <SideMenu changeImgFunction={setImgSrc} />
        <Picture imgSrc={imgSrc} alt="Sem foto" />
      </div>
      <NewBlock />
    </>
  );
}

export default App;
