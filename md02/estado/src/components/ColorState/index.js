import style from "./style.module.css";
import { useState } from "react";

export function ColorState() {
  const [color, setColor] = useState("white");

  function handleChangeColor(e) {
    if (e.target.innerText === "Vermelho") {
      setColor("red");
    }

    if (e.target.innerText === "Azul") {
      setColor("blue");
    }

    if (e.target.innerText === "Verde") {
      setColor("green");
    }
  }

  return (
    <div className={style.container} style={{ backgroundColor: color }}>
      <button onClick={handleChangeColor}>Vermelho</button>
      <button onClick={handleChangeColor}>Azul</button>
      <button onClick={handleChangeColor}>Verde</button>
    </div>
  );
}
