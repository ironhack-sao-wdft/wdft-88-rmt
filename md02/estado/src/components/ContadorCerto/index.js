import { useState } from "react";

export function ContadorCerto() {
  // O useState é um função!
  // Ele retorna SEMPRE, um array com 2 elementos
  // O que que tem nessa array:
  // [estado, funçãoQueAlteraOEstado]

  const [counter, setCounter] = useState(1);

  console.log(counter);

  function acresCounter() {
    // o setEstado é DESTRUTIVO, ele apaga o estado anterior e coloca o parametro como o novo valor do estado

    setCounter(counter + 1);
  }

  function decresCounter() {
    // o setEstado é DESTRUTIVO, ele apaga o estado anterior e coloca o parametro como o novo valor do estado

    setCounter(counter - 1);
  }

  return (
    <>
      <strong>{counter}</strong>
      <button onClick={acresCounter}>+</button>
      <button onClick={decresCounter}>-</button>
    </>
  );
}
