export function ContadorErrado() {
  let counter = 1;

  function acresCounter() {
    counter++;
    console.log(counter);
  }

  function decresCounter() {
    counter--;
    console.log(counter);
  }

  return (
    <>
      <strong>{counter}</strong>
      <button onClick={acresCounter}>+</button>
      <button onClick={decresCounter}>-</button>
    </>
  );
}
