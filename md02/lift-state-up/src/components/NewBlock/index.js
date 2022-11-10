import { Form } from "../Form";
import { DisplayInfos } from "../DisplayInfos";

import { useState } from "react";

export function NewBlock() {
  const [infosToDisplay, setInfosToDisplay] = useState({
    name: "Jurema",
    age: 0,
  });

  return (
    <>
      <Form changeDisplayInfos={setInfosToDisplay} />
      <DisplayInfos name={infosToDisplay.name} age={infosToDisplay.age} />
    </>
  );
}
